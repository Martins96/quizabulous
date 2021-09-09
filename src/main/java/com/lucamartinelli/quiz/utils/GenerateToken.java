package com.lucamartinelli.quiz.utils;

import org.apache.commons.lang3.math.NumberUtils;
import org.eclipse.microprofile.config.Config;
import org.eclipse.microprofile.config.ConfigProvider;
import org.jboss.logging.Logger;

import io.smallrye.jwt.build.Jwt;

public class GenerateToken {

	private static final Logger log = Logger.getLogger(GenerateToken.class.getCanonicalName());

	public static String generate(String team) {
		if (team == null)
			throw new RuntimeException("Team name is null");
		final Config config = ConfigProvider.getConfig();
		final String expirationDelta = config
				.getOptionalValue("jwt.expiration.delta", String.class)
				.orElse("86400000"); // valid for 24h
		final String issuer = config.getOptionalValue("jwt.issuer", String.class)
				.orElse("Luca_Approver");
		final long currentTime = System.currentTimeMillis() ;
		
		String role = "competitor";
		if (team.charAt(0) == '*') {
			team = team.substring(1);
			role = "master";
		}
		
		final String token = Jwt
				.issuer(issuer)
				.upn(team)
				.groups(role)
				.issuedAt(currentTime)
				.expiresAt(currentTime
						+ NumberUtils.toLong(expirationDelta, 86400000L))
				.jws()
				.innerSign()
				.encrypt();
		log.debug("Generated JWT: " + token);
		return token;
	}
}
