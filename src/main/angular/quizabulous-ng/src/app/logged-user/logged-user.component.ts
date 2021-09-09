import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieManager } from '../cookie-utils';
import { RestService } from '../rest-service';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.css']
})
export class LoggedUserComponent implements OnInit {

  myRole: string;

  private jwt: string;

  constructor(private cookieMng: CookieManager, private rest: RestService) { 
    this.jwt = cookieMng.getCookie("user.jwt");
  }

  ngOnInit(): void {

    let loginUrl: string = "/user-manager/get-role";
    if (window.location.port === "4200")
      loginUrl = "http://localhost/user-manager/get-role";

    this.rest.sendGetRawText(loginUrl, new HttpHeaders({
      "content-type": "text/plain",
      "Authorization": "Bearer " + this.jwt
    })).subscribe(r => {
      this.myRole = r.body;
    }, err => {
      console.error(err);
    })

  }

}
