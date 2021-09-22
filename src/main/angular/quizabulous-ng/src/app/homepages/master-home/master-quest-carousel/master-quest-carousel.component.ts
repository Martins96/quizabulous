import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieManager } from 'src/app/cookie-utils';
import { RestService } from 'src/app/rest-service';
import { QuestVO } from 'src/app/vo/QuestVO';

@Component({
  selector: 'app-master-quest-carousel',
  templateUrl: './master-quest-carousel.component.html',
  styleUrls: ['./master-quest-carousel.component.css']
})
export class MasterQuestCarouselComponent implements OnInit {

  private jwt: string;
  isVisible: boolean = true;

  questSelected: QuestVO;

  selectedId: string = "";
  currentId: number = 0;
  maxQuests: number;

  constructor(cookieMng: CookieManager, private rest: RestService) { 
    this.jwt = cookieMng.getCookie("user.jwt");
  }

  ngOnInit(): void {
    let maxNumUrl: string = "/master/saved-quests-number";
    if (window.location.port === "4200")
      maxNumUrl = "http://localhost/master/saved-quests-number";

    this.rest.sendGetRawText(maxNumUrl, new HttpHeaders({
      "Authorization": "Bearer " + this.jwt,
      "Accept": "text/plain"
    })).subscribe(resp => {
      this.maxQuests = Number(resp.body);
    }, err => {
      console.error(err)
    })
  }

  titleText(): string {
    if (!this.isVisible)
      return "Quest configurate";
    else
      return "";
  }

  showHide(): void {
    this.isVisible = !this.isVisible;
  }

  inputCheck(): void {
    const newVal: string = (<HTMLInputElement>document.getElementById("selectedId")).value;
    if (newVal === "") {
      this.selectedId = newVal;
    } else if (newVal.includes(".")) {
      (<HTMLInputElement>document.getElementById("selectedId")).value = this.selectedId;
    } else if (!Number.isInteger(Number(newVal))) {
      (<HTMLInputElement>document.getElementById("selectedId")).value = this.selectedId;
    } else {
      this.selectedId = newVal;
    }
  }

  getQuestSelected(): void {
    const id: number = Number(this.selectedId);
    if (!id)
      return;
    
    this.getQuest(id);
    this.currentId = id;
    (<HTMLInputElement>document.getElementById("selectedId")).value = "";
  }

  getQuest(id: number): void {
    id--;
    let getByIdUrl: string = "/master/saved-quests/" + id;
    if (window.location.port === "4200")
      getByIdUrl = "http://localhost/master/saved-quests/" + id;

    this.rest.sendGet<QuestVO>(getByIdUrl, new HttpHeaders({
      "Authorization": "Bearer " + this.jwt,
      "Accept": "application/json"
    })).subscribe(resp => {
      this.questSelected = resp.body;
    }, err => {
      console.error(err)
    })
  }

  increaseDisabled(): boolean {
    if (this.currentId < this.maxQuests)
      return false;
    return true;
  }

  increase(): void {
    this.currentId++;
    this.getQuest(this.currentId);
  }

  decrease(): void {
    this.currentId--;
    this.getQuest(this.currentId);
  }

  decreaseDisabled(): boolean {
    if (this.currentId > 1)
      return false;
    return true;
  }

  startQuest(): void {
    if (!window.confirm("Sicuro di inviare e avviare la quest?\n" +
        "Se non hai chiuso la precedente, la annullerai e perderai le risposte.")) {
      return;
    }
    
    const id = this.currentId - 1;
    let getByIdUrl: string = "/master/start-saved-quest/" + id;
    if (window.location.port === "4200")
      getByIdUrl = "http://localhost/master/start-saved-quest/" + id;

    this.rest.sendPut<QuestVO>(getByIdUrl, new HttpHeaders({
      "Authorization": "Bearer " + this.jwt,
      "Accept": "application/json"
    })).subscribe(resp => {
      this.questSelected = resp.body;
    }, err => {
      console.error(err)
    })

    this.questSelected = undefined;
    this.currentId = 0;
  }

}
