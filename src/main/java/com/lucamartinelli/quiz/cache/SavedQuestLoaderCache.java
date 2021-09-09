package com.lucamartinelli.quiz.cache;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Singleton;

import org.eclipse.microprofile.config.ConfigProvider;
import org.jboss.logging.Logger;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;
import com.lucamartinelli.quiz.vo.QuestVO;

@Singleton
public class SavedQuestLoaderCache {
	
	private static final Logger log = Logger.getLogger(SavedQuestLoaderCache.class.getCanonicalName());
	
	private static final List<QuestVO> QUEST_CACHE = new ArrayList<>();
	
	public static int count() {
		return QUEST_CACHE.size();
	}
	
	public static QuestVO getById(int id) {
		if (id < 0 || id >= QUEST_CACHE.size())
			return null;
		return QUEST_CACHE.get(id);
	}
	
	
	
	public static void loadCache() {
		final String questsPath = ConfigProvider.getConfig()
				.getOptionalValue("conf-folder-base", String.class)
				.orElse(".").concat("/quests/quests.json");
		final File questsFile = new File(questsPath);
		if (!questsFile.exists() || !questsFile.isFile()) {
			log.error("Quests file missing! please check the conf folder");
			log.error("Expecting path: " + questsPath);
			return;
		}
		
		final Gson gson = new Gson();
		try (final Reader reader = new FileReader(questsFile)) {
			final Type listType = new TypeToken<ArrayList<QuestVO>>(){}.getType();
			final List<QuestVO> questsFromFile = gson.fromJson(reader, listType);
			QUEST_CACHE.addAll(questsFromFile);
		} catch (final IOException e) {
			log.error("Error during load the quests from file: ", e);
			return;
		} catch (final JsonSyntaxException e) {
			log.error("Syntax error in quests.json file, please check:", e);
			return;
		}
		
		log.debug("Finished to load all quests from file");
		log.debug("Quests loaded are: " + QUEST_CACHE.size());
		
	}
	
	public static void asyncLoadCache() {
		new Thread(() -> {
			loadCache();
		}).start();
	}
	
	
}
