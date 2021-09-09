import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CookieManager } from 'src/app/cookie-utils';
import { RestService } from 'src/app/rest-service';

@Component({
  selector: 'app-master-score',
  templateUrl: './master-score.component.html',
  styleUrls: ['./master-score.component.css']
})
export class MasterScoreComponent {

  private jwt: string;
  isVisible: boolean = true;

  resultMap: Map<string, string> = new Map();

  constructor(cookieMng: CookieManager, private rest: RestService) { 
    this.jwt = cookieMng.getCookie("user.jwt");
  }

  titleText(): string {
    if (!this.isVisible)
      return "Risultati finali";
    else
      return "";
  }

  showHide(): void {
    this.isVisible = !this.isVisible;
  }

  getResultScore() {
    let statusPollUrl: string = "/master/get-scores";
    if (window.location.port === "4200")
      statusPollUrl = "http://localhost/master/get-scores";

    this.rest.sendGet<any>(statusPollUrl, new HttpHeaders({
      "Authorization": "Bearer " + this.jwt,
      "Accept": "application/json"
    })).subscribe(resp => {
      const body = resp.body;
      const keys: string[] = Object.keys(body);
      keys.forEach(k => {
        const v: number = body[k];
        this.resultMap.set(k, v.toString());
      })
    }, err => {
      console.error(err)
    })
  }

}
