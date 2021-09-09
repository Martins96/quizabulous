import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { CookieManager } from 'src/app/cookie-utils';
import { RestService } from 'src/app/rest-service';
import { QuestVO } from 'src/app/vo/QuestVO';

@Component({
  selector: 'app-user-answer-to',
  templateUrl: './user-answer-to.component.html',
  styleUrls: ['./user-answer-to.component.css']
})
export class UserAnswerToComponent implements OnInit, OnDestroy {

  private jwt: string;
  // Every 5 sec
  private source: Observable<number> = interval(5000);
  // Every 1 sec
  private sourceDots: Observable<number> = interval(1000);
  private subscription: Subscription;
  private subscriptionDots: Subscription;

  quest: QuestVO;
  loadingDots: string = ".";

  constructor(cookieMng: CookieManager, private rest: RestService) {
    this.jwt = cookieMng.getCookie("user.jwt");
  }

  ngOnInit(): void {
    this.verifyQuest();
    this.subscription = this.source.subscribe(() => this.verifyQuest());
    this.subscriptionDots = this.sourceDots.subscribe(() => this.dots());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionDots.unsubscribe();
  }

  verifyQuest(): void {
    let getActualQuestUrl: string = "/user/actual-quest";
    if (window.location.port === "4200")
      getActualQuestUrl = "http://localhost/user/actual-quest";

    let getPollStatusUrl: string = "/user/new-quest-available";
      if (window.location.port === "4200")
        getPollStatusUrl = "http://localhost/user/new-quest-available";



    this.rest.sendGetRawText(getPollStatusUrl, new HttpHeaders({
      "Authorization": "Bearer " + this.jwt
    })).subscribe(resp => {
      if (resp.body === "true") {
        this.subscription.unsubscribe();
        this.getQuest(getActualQuestUrl);
      }
    }, err => {
      console.error(err);
    });
  }

  private getQuest(url: string): void {
    this.rest.sendGet<QuestVO>(url, new HttpHeaders({
      "Authorization": "Bearer " + this.jwt,
      "Accept": "application/json"
    })).subscribe(resp => {
      if (resp.status === 200) {
        this.quest = resp.body;
      } else {
        console.error(resp);
        this.subscription = this.source.subscribe(() => this.verifyQuest());
      }
    }, err => {
      console.error(err);
      this.subscription = this.source.subscribe(() => this.verifyQuest());
    });
  }


  answered(answered: boolean): void {
    if (answered) {
      this.quest = undefined;
      this.subscription = this.source.subscribe(() => this.verifyQuest());
    }
  }

  dots() {
    if (this.loadingDots === "."){
      this.loadingDots = "..";
    } else if (this.loadingDots === ".."){
      this.loadingDots = "...";
    } else if (this.loadingDots === "..."){
      this.loadingDots = ".";
    }
  }

}
