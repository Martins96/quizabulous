package com.lucamartinelli.quiz;

import java.util.Map;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.lang3.math.NumberUtils;
import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Info;
import org.eclipse.microprofile.openapi.annotations.security.SecurityRequirement;
import org.jboss.logging.Logger;

import com.google.gson.Gson;
import com.lucamartinelli.quiz.cache.QuestInMemDB;
import com.lucamartinelli.quiz.cache.SavedQuestLoaderCache;
import com.lucamartinelli.quiz.cache.UserInMemDB;
import com.lucamartinelli.quiz.ejb.MasterEJB;
import com.lucamartinelli.quiz.vo.QuestVO;

@ApplicationScoped
@Path("/master")
@RolesAllowed("master")
@OpenAPIDefinition(info = @Info(
		title = "Master's APIs", 
		version = "1.0.0",
		description = "APIs for master, the game director"),
	security = {@SecurityRequirement(name = "JWT")}
)
public class MasterRestService {
	
	@Inject
	MasterEJB masterEJB;
	
	@Inject
	Logger log;
	
	@POST
	@Path("/start-custom-quest")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response sendCustomQuest(final QuestVO quest) {
		final boolean result = masterEJB.sendCustomQuest(quest);
		if (!result) {
			return Response.status(400).build();
		}
		return Response
				.noContent()
				.build();
	}
	
	@GET
	@Path("/close-and-get-answers")
	@Produces(MediaType.APPLICATION_JSON)
	public Response closePollAndGetAnswers() {
		final short correctAnswer = QuestInMemDB
				.getActualQuest().getCorrectAnswer();
		log.debug("correct is " + correctAnswer);
		
		final Map<String, Integer> answer = masterEJB.closeAndGetAnswers();
		if (answer == null) {
			log.error("Result is null");
			return Response.serverError().build();
		}
		
		String jsonResp = new Gson().toJson(answer);
		log.debug("correct is " + correctAnswer);
		masterEJB.updateUsersScore(correctAnswer);
		log.debug("Closed and result returned: \n" + jsonResp);
		
		return Response
				.ok(jsonResp)
				.build();
	}
	
	
	@GET
	@Path("/get-scores")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getScores() {
		return Response
				.ok(new Gson().toJson(UserInMemDB.getAllValues()))
				.build();
	}
	
	
	@GET
	@Path("/actual-quest")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getActualQuest() {
		if (!QuestInMemDB.isPoolOpen()) {
			return Response
					.status(423)
					.entity("Pool close")
					.build();
		}
		
		final QuestVO quest = QuestInMemDB.getActualQuest();
		quest.setCorrectAnswer((short) 0);
		log.debug("Master has request the question: " + quest.getQuestion());
		return Response.ok(quest).build();
	}
	
	
	@GET
	@Path("/saved-quests-number")
	@Produces(MediaType.TEXT_PLAIN)
	public Response getNumberOfSavedQuests() {
		return Response.ok(SavedQuestLoaderCache.count()).build();
	}
	
	@GET
	@Path("/saved-quests/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getNumberOfSavedQuests(@PathParam("id") String id) {
		if (!NumberUtils.isCreatable(id)) {
			return Response.status(400).entity("id is not a number").build();
		}
		
		final QuestVO quest =  SavedQuestLoaderCache.getById(NumberUtils.toInt(id));
		
		if (quest == null) {
			return Response.status(204).build();
		}
		
		return Response.ok(quest).build();
	}
	
	@PUT
	@Path("/start-saved-quest/{id}")
	public Response startSelectedQuest(@PathParam("id") String id) {
		final int idNum = NumberUtils.toInt(id, -1);
		if (idNum == -1) {
			return Response.status(400).entity("Id must be an integer").build();
		}
		if (SavedQuestLoaderCache.count() <= idNum) {
			return Response.status(400).entity("Id out of bound").build();
		}
		final boolean result = masterEJB.sendSavedQuest(idNum);
		if (!result) {
			return Response.status(400).build();
		}
		return Response
				.noContent()
				.build();
	}
	
}
