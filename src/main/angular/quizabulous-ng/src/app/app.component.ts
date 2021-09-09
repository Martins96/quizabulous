import { Component } from '@angular/core';
import { CookieManager } from './cookie-utils';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	private cookieJWT: string = "";

	constructor(private cookieMng: CookieManager) {
		this.cookieJWT = this.cookieMng.getCookie('user.jwt');
	}

	getJWT(): string {
		return this.cookieJWT;
	}
}
