package com.lucamartinelli.quiz.utils;

import com.lucamartinelli.quiz.vo.QuestVO;

public class CheckData {
	
	public static boolean checkQuest(final QuestVO quest) {
		if (quest == null)
			return false;
		if (quest.getQuestion() == null
				|| quest.getQuestion().isEmpty()
				|| quest.getCorrectAnswer() < 1
				|| quest.getCorrectAnswer() > 4) {
			return false;
		}
		
		return true;
	}
	
	public static boolean checkAnswer() {
		return false;
	}
	
	
}
