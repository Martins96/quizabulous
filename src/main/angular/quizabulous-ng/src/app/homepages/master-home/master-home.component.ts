import { Component } from '@angular/core';
import { CookieManager } from 'src/app/cookie-utils';

@Component({
  selector: 'app-master-home',
  templateUrl: './master-home.component.html',
  styleUrls: ['./master-home.component.css']
})
export class MasterHomeComponent {

  constructor(private cookieMng: CookieManager) { }


  exit(): void {
    let confermation: boolean = window.confirm("Sei sicuro di uscire? Ci mancherai master :'(");
    if (confermation) {
      this.cookieMng.deleteCookie("user.jwt");
      window.location.href = "/";
    }
  }


}
