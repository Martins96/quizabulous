package com.lucamartinelli.quiz;

import javax.annotation.security.RolesAllowed;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.jwt.JsonWebToken;
import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Info;
import org.eclipse.microprofile.openapi.annotations.security.SecurityRequirement;
import org.jboss.logging.Logger;

import com.lucamartinelli.quiz.cache.QuestInMemDB;

@ApplicationScoped
@Path("/user-manager")
@RolesAllowed({"competitor", "master"})
@OpenAPIDefinition(info = @Info(
		title = "API for Manage User", 
		version = "1.0.0",
		description = "APIs for all logged users, manage user info"),
	security = {@SecurityRequirement(name = "JWT")}
)
public class UserManagerRestService {
	
	@Inject
	Logger log;
	
	@Inject
	JsonWebToken jwt;
	
	
	@GET
	@Path("/get-role")
	@Produces(MediaType.TEXT_PLAIN)
	public String getRole() {
		return jwt.getGroups().toArray(new String[0])[0];
	}
	
	@GET
	@Path("/get-name")
	@Produces(MediaType.TEXT_PLAIN)
	public String getName() {
		return jwt.getName();
	}
	
	@GET
	@Path("/poll-status")
	@Produces(MediaType.TEXT_PLAIN)
	public String getPollStatus() {
		return QuestInMemDB.isPoolOpen() ? "Open" : "Close";
	}
	
}
