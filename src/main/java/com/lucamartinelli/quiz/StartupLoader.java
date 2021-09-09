package com.lucamartinelli.quiz;

import javax.inject.Inject;

import org.jboss.logging.Logger;

import com.lucamartinelli.quiz.cache.SavedQuestLoaderCache;

import io.quarkus.runtime.Quarkus;
import io.quarkus.runtime.QuarkusApplication;
import io.quarkus.runtime.annotations.QuarkusMain;

@QuarkusMain
public class StartupLoader {
	
	public static void main(final String... args) {
		Quarkus.run(MyApp.class, args);
    }

    public static class MyApp implements QuarkusApplication {
    	
    	@Inject
    	Logger log;

        @Override
        public int run(String... args) throws Exception {
        	log.info("Server starting up...");
        	SavedQuestLoaderCache.asyncLoadCache();
        	log.info("Triggered startup events, ready to rock!");
            Quarkus.waitForExit();
            return 0;
        }
    }
	
	
}
