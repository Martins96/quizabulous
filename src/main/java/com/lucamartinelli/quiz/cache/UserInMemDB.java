package com.lucamartinelli.quiz.cache;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.inject.Singleton;

import org.jboss.logging.Logger;

@Singleton
public class UserInMemDB {
	
	private static final Logger log = Logger.getLogger(UserInMemDB.class.getCanonicalName());
	
	private UserInMemDB() {
	}
	
	private final static Map<String, Integer> USER_POINTS_POOL = new HashMap<>(10);
	
	
	
	public static void increaseUserPoint(String username) {
		int points = USER_POINTS_POOL.getOrDefault(username, 0);
		points++;
		log.debug("Increasing " + username + " to " + points);
		USER_POINTS_POOL.put(username, points);
	}
	
	public static int getUserPoints(String username) {
		final int points = USER_POINTS_POOL.getOrDefault(username, 0);
		log.debug(username + " have " + points + " points");
		return points;
	}
	
	public static Map<String, Integer> getAllValues() {
		log.debug("Dump map: " + USER_POINTS_POOL.toString());
		return USER_POINTS_POOL;
	}
	
	public static void resetPoints() {
		Set<String> users = USER_POINTS_POOL.keySet();
		users.forEach(USER_POINTS_POOL::remove);
		log.debug("Points reset");
	}
	
	
	
	
	
}
