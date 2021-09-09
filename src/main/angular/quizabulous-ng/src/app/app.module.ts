import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { MasterHomeComponent } from './homepages/master-home/master-home.component';
import { CompetitorHomeComponent } from './homepages/competitor-home/competitor-home.component';
import { MasterCustomQuestComponent } from './homepages/master-home/master-custom-quest/master-custom-quest.component';
import { MasterPollMngComponent } from './homepages/master-home/master-poll-mng/master-poll-mng.component';
import { MasterPollResultsComponent } from './homepages/master-home/master-poll-mng/master-poll-results/master-poll-results.component';
import { UserAnswerToComponent } from './homepages/competitor-home/user-answer-to/user-answer-to.component';
import { UserQuestFormComponent } from './homepages/competitor-home/user-answer-to/user-quest-form/user-quest-form.component';
import { MasterScoreComponent } from './homepages/master-home/master-score/master-score.component';
import { MasterQuestCarouselComponent } from './homepages/master-home/master-quest-carousel/master-quest-carousel.component';
import { MasterCarouselViewComponent } from './homepages/master-home/master-quest-carousel/master-carousel-view/master-carousel-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    LoggedUserComponent,
    MasterHomeComponent,
    CompetitorHomeComponent,
    MasterCustomQuestComponent,
    MasterPollMngComponent,
    MasterPollResultsComponent,
    UserAnswerToComponent,
    UserQuestFormComponent,
    MasterScoreComponent,
    MasterQuestCarouselComponent,
    MasterCarouselViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
