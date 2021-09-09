package com.lucamartinelli.quiz.cache;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.inject.Singleton;

import org.jboss.logging.Logger;

import com.lucamartinelli.quiz.vo.QuestVO;

@Singleton
public class QuestInMemDB {
	
	private static final Logger log = Logger.getLogger(QuestInMemDB.class.getCanonicalName());
	
	private static boolean poolStatus = false;
	private static QuestVO actualQuest = null;
	private static Map<String, Integer> incomingAnswers = new HashMap<>(5);
	
	
	public static void openPool() {
		poolStatus = true;
		log.debug("Quest pool is open");
	}
	
	public static void closePool() {
		poolStatus = false;
		log.debug("Quest pool is close");
	}
	
	public static boolean isPoolOpen() {
		log.debug("Quest pool is open? " + poolStatus);
		return poolStatus;
	}
	
	public static QuestVO getActualQuest() {
		return actualQuest;
	}
	
	public static void setActualQuest(final QuestVO quest) {
		if (quest == null) {
			log.debug("New quest is null");
		} else {
			log.debug("Setting new quest\n"
					+ "question: " + quest.getQuestion() + '\n'
					+ "answer1: " + quest.getAnswer1() + '\n'
					+ "answer2: " + quest.getAnswer2() + '\n'
					+ "answer3: " + quest.getAnswer3() + '\n'
					+ "answer4: " + quest.getAnswer4() + '\n');
			log.trace("Correct answer is " + quest.getCorrectAnswer());
		}
		actualQuest = quest;
	}
	
	public static void deleteQuest() {
		actualQuest = null;
		log.debug("Quest deleted");
	}
	
	
	public static void putAnswer(String username, Integer answer) {
		incomingAnswers.put(username, answer);
		log.debug(username + " answered [" + answer + ']');
	}
	
	public static Integer getUserAnswer(String username) {
		return incomingAnswers.get(username);
	}
	
	public static Set<String> getUsersByAnswer(int answer) {
		log.debug("Returning all users that answered: " + answer);
		return incomingAnswers.entrySet()
				.stream()
				.filter(e -> e.getValue().intValue() == answer)
				.map(e -> e.getKey())
				.collect(Collectors.toSet());
	}
	
	public static Map<String, Integer> getUserAnswers() {
		log.debug("User answers: " + incomingAnswers);
		return incomingAnswers;
	}
	
	public static void resetAnswers() {
		incomingAnswers.clear();
		log.debug("Answers reset");
	}
}
