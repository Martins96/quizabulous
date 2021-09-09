import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieManager } from '../cookie-utils';
import { RestService } from '../rest-service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  teamCode: string;

  private error: string;
  serverError: boolean = false;
  serverErrorMsg: string = null;

  constructor(private cookieMng: CookieManager, private rest: RestService) { }

  ngOnInit(): void {
  }

  submitLogin() {
    this.serverError = true;
    this.serverErrorMsg = null;
    let loginUrl: string = "/login";
    if (window.location.port === "4200")
      loginUrl = "http://localhost/login";

    this.rest.sendPostRawText(loginUrl, this.teamCode, new HttpHeaders({
      "content-type": "text/plain"
    })).subscribe(r => {
      console.log("Ok from login:" + r);
      this.cookieMng.setCookie('user.jwt', r.body, 1);
      window.location.href = "/";
    }, err => {
      this.error = err;
      if (err.status >= 500){
        this.serverError = true;
        this.serverErrorMsg = err.message;
      }
    })
  }

  getError(): string {
    return this.error;
  }


}
