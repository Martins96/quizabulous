import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CookieManager } from 'src/app/cookie-utils';
import { RestService } from 'src/app/rest-service';

@Component({
  selector: 'app-master-poll-mng',
  templateUrl: './master-poll-mng.component.html',
  styleUrls: ['./master-poll-mng.component.css']
})
export class MasterPollMngComponent implements OnDestroy, OnInit{

  private jwt: string;
  private subscription: Subscription;

  statusPoll: string = "Caricamento...";
  btnClicked: boolean = false;
  pollResults: any;

  constructor(cookieMng: CookieManager, private rest: RestService) {
    this.jwt = cookieMng.getCookie("user.jwt");
  }

  ngOnInit(): void {
    // Every 3 sec
    this.getStatusPoll();
    const source = interval(3000);
    this.subscription = source.subscribe(() => this.getStatusPoll());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  getStatusPoll(): void {
    let statusPollUrl: string = "/user-manager/poll-status";
    if (window.location.port === "4200")
      statusPollUrl = "http://localhost/user-manager/poll-status";

    this.rest.sendGetRawText(statusPollUrl, new HttpHeaders({
      "Authorization": "Bearer " + this.jwt,
      "Accept": "text/plain"
    })).subscribe(resp => {
      if (resp.body === "Open")
        this.statusPoll = "Aperto";
      else if (resp.body === "Close")
        this.statusPoll = "Chiuso";
      else
        this.statusPoll = resp.body;
    }, err => {
      console.error(err)
    }, () => {
      this.btnClicked = false;
    })

  }


  closeAndGetResults(): void {
    this.btnClicked = true;
    this.pollResults = undefined;
    let closeAndResultsUrl: string = "/master/close-and-get-answers";
    if (window.location.port === "4200")
      closeAndResultsUrl = "http://localhost/master/close-and-get-answers";

    this.rest.sendGet<any>(closeAndResultsUrl, new HttpHeaders({
      "Authorization": "Bearer " + this.jwt,
      "Accept": "application/json"
    })).subscribe(resp => {
      console.log(resp.body);
      this.pollResults = resp.body;
    }, err => {
      console.error(err);
    })

  }
}
