import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CookieManager } from 'src/app/cookie-utils';
import { RestService } from 'src/app/rest-service';
import { QuestVO } from 'src/app/vo/QuestVO';

@Component({
  selector: 'app-master-custom-quest',
  templateUrl: './master-custom-quest.component.html',
  styleUrls: ['./master-custom-quest.component.css']
})
export class MasterCustomQuestComponent {

  jwt: string;

  isVisile: boolean = true;

  questField: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;

  correctAnswer: string;

  constructor(private cookieMng: CookieManager, private rest: RestService) {
    this.jwt = this.cookieMng.getCookie("user.jwt");
  }


  sendCustomQuest(): void {
    if (!window.confirm("Sicuro di inviare e avviare la quest?")) {
      return;
    }

    let newQuestUrl: string = "/master/start-custom-quest";
    if (window.location.port === "4200")
      newQuestUrl = "http://localhost/master/start-custom-quest";

    let body: QuestVO = new QuestVO();
    body.question = this.questField;
    body.answer1 = this.answer1;
    body.answer2 = this.answer2;
    body.answer3 = this.answer3;
    body.answer4 = this.answer4;
    body.correctAnswer = Number.parseInt(this.correctAnswer);

    this.rest.sendPost(newQuestUrl, body, new HttpHeaders({
      "content-type": "application/json",
      "Authorization": "Bearer " + this.jwt
    })).subscribe(() => {
      this.questField = "";
      this.answer1 = "";
      this.answer2 = "";
      this.answer3 = "";
      this.answer4 = "";
      this.correctAnswer = undefined;
      window.alert("Richiesta effettuata, poll aperto");
    }, err => {
      console.error(err);
    })
  }

  showHide(): void {
    this.isVisile = !this.isVisile;
  }

  titleText(): string {
    if (!this.isVisile)
      return "Custom Quest";
    else
      return "";
  }

}
