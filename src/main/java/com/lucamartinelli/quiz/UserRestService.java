package com.lucamartinelli.quiz;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.jwt.JsonWebToken;
import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Info;
import org.eclipse.microprofile.openapi.annotations.security.SecurityRequirement;
import org.jboss.logging.Logger;

import com.lucamartinelli.quiz.cache.QuestInMemDB;
import com.lucamartinelli.quiz.vo.QuestVO;

@ApplicationScoped
@Path("/user")
@RolesAllowed("competitor")
@OpenAPIDefinition(info = @Info(
		title = "User's APIs", 
		version = "1.0.0",
		description = "APIs for competitor, users will get quest and answer to it"),
	security = {@SecurityRequirement(name = "JWT")}
)
public class UserRestService {
	
	@Inject
	Logger log;
	
	@Inject
	JsonWebToken jwt;
	
	
	
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
		
		final QuestVO tmp = QuestInMemDB.getActualQuest();
		final QuestVO quest = new QuestVO(
				tmp.getQuestion(), 
				tmp.getAnswer1(),
				tmp.getAnswer2(),
				tmp.getAnswer3(),
				tmp.getAnswer4(),
				(short) 0);
		if (quest == null || quest.equals(new QuestVO())) {
			// No quest started
			return Response.noContent().build();
		}
		quest.setCorrectAnswer((short) 0);
		log.debug(jwt.getName() + " has request the question: " + quest.getQuestion());
		return Response.ok(quest).build();
	}
	
	
	@POST
	@Path("/answer-to")
	@Consumes(MediaType.TEXT_PLAIN)
	public Response sendUserAnswer(final Integer answer) {
		if (!QuestInMemDB.isPoolOpen()) {
			return Response
					.status(423)
					.entity("Pool close")
					.build();
		}
		
		QuestInMemDB.putAnswer(jwt.getName(), answer);
		return Response
				.noContent()
				.build();
	}
	
	@GET
	@Path("/new-quest-available")
	@Produces(MediaType.TEXT_PLAIN)
	public String getPollStatus() {
		if (QuestInMemDB.isPoolOpen()) {
			final Integer resp = QuestInMemDB.getUserAnswer(jwt.getName());
			if (resp == null) {
				log.debug("New quest for user " + jwt.getName() + " is available");
				return "true";
			}
		}
		return "false";
	}
	
}
