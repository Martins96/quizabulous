import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieManager } from 'src/app/cookie-utils';
import { RestService } from 'src/app/rest-service';

@Component({
  selector: 'app-competitor-home',
  templateUrl: './competitor-home.component.html',
  styleUrls: ['./competitor-home.component.css']
})
export class CompetitorHomeComponent implements OnInit {

  private jwt: string;

  username: string;

  constructor(private cookieMng: CookieManager, private rest: RestService) {
    this.jwt = this.cookieMng.getCookie("user.jwt");
  }

  ngOnInit(): void {
    let getNameUrl: string = "/user-manager/get-name";
    if (window.location.port === "4200") {
      getNameUrl = "http://localhost/user-manager/get-name";
    }

    this.rest.sendGetRawText(getNameUrl, new HttpHeaders({
      "Authorization": "Bearer " + this.jwt,
      "Accept": "text/plain"
    })).subscribe(resp => {
      this.username = resp.body;
    }, err => {
      console.error(err);
    })
  }

  exit(): void {
    let confermation: boolean = window.confirm("Sei sicuro di uscire? Ci mancherai " + this.username + " :'(");
    if (confermation) {
      this.cookieMng.deleteCookie("user.jwt");
      window.location.href = "/";
    }
  }

}
