package com.lucamartinelli.quiz.ejb;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.jboss.logging.Logger;

import com.lucamartinelli.quiz.utils.GenerateToken;

@RequestScoped
public class LoginEJB {
	
	@Inject
	Logger log;
	
	@Inject
	@ConfigProperty(name = "users-properties-file")
	String filePath;
	
	
	public String login(final String credential) throws IOException {
		log.debug("Log in with credential: " + credential);
		final Properties propFile = new Properties();
		propFile.load(new FileInputStream(new File(filePath)));
		log.debug("Users file loaded");
		
		String teamName = null;
		
		for(final String k : propFile.stringPropertyNames()) {
			final String v = propFile.getProperty(k);
			if (credential.equalsIgnoreCase(v)) {
				teamName = (String) k;
				break;
			}
		}
		
		log.debug("Team name found for " + credential + " is " + teamName);
		
		if (teamName == null) {
			log.debug("Wrong credentials");
			return null;
		}
		
		final String jwt = GenerateToken.generate(teamName);
		
		log.debug("Final JWT: " + jwt);
		
		return jwt;
	}
	
	
}
