package com.lucamartinelli.quiz.ejb;

import java.util.Map;
import java.util.Set;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;

import org.jboss.logging.Logger;

import com.lucamartinelli.quiz.cache.QuestInMemDB;
import com.lucamartinelli.quiz.cache.SavedQuestLoaderCache;
import com.lucamartinelli.quiz.cache.UserInMemDB;
import com.lucamartinelli.quiz.utils.CheckData;
import com.lucamartinelli.quiz.vo.QuestVO;

@RequestScoped
public class MasterEJB {

	@Inject
	Logger log;
	
	public boolean sendCustomQuest(final QuestVO quest) {
		if (!CheckData.checkQuest(quest)) {
			log.warn("Input is not correct");
			return false;
		}
		
		new Thread(() -> {
			startQuest(quest);
		}).start();
		return true;
	}
	
	public boolean sendSavedQuest(final int id) {
		final QuestVO quest = SavedQuestLoaderCache.getById(id);
		
		new Thread(() -> {
			startQuest(quest);
		}).start();
		return true;
	}
	
	public Map<String, Integer> closeAndGetAnswers() {
		QuestInMemDB.closePool();
		Map<String, Integer> results = QuestInMemDB.getUserAnswers();
		return results;
	}
	
	private void startQuest(final QuestVO quest) {
		QuestInMemDB.closePool();
		QuestInMemDB.resetAnswers();
		QuestInMemDB.setActualQuest(quest);
		QuestInMemDB.openPool();
	}
	
	
	
	
	
	
	
	
	public void updateUsersScore(short correctAnswer) {
		new Thread(() -> {
			if (QuestInMemDB.getActualQuest() == null)
				return;
			
			
			Set<String> correctUser = QuestInMemDB.getUsersByAnswer(correctAnswer);
			correctUser.forEach(UserInMemDB::increaseUserPoint);
			log.debug("Updated scores, winners are: " + correctUser);
			
			QuestInMemDB.resetAnswers();
		}).start();
	}
}
