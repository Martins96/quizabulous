import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class RestService {

	constructor(private http: HttpClient) { }

	sendPostRawText(url: string, body: any, headers: HttpHeaders): Observable<HttpResponse<string>> {
		// call
		return this.http.post(url, body, {
			headers,
			observe: 'response',
			responseType: 'text'
		});
	}

	sendGetRawText(url: string, headers: HttpHeaders): Observable<HttpResponse<string>> {
		// call
		return this.http.get(url, {
			headers,
			observe: 'response',
			responseType: 'text'
		});
	}
	
	sendPost<T>(url: string, body: any, headers: HttpHeaders): Observable<HttpResponse<T>> {
		return this.http.post<T>(url, body, {
			headers,
			observe: 'response',
			responseType: 'json'
		});
	}
	
	sendGet<T>(url: string, headers: HttpHeaders): Observable<HttpResponse<T>> {
		return this.http.get<T>(url, {
			headers,
			observe: 'response'
		});
	}

	getImage(url: string, headers: HttpHeaders): Observable<Blob> {
		return this.http.get(url, { 
			headers,
			responseType: 'blob' 
		});
	}

	sendGetBlob(url: string, headers: HttpHeaders): Observable<HttpResponse<Blob>> {
		// call
		return this.http.get(url, {
			headers,
			observe: 'response',
			responseType: 'blob'
		});
	}
}
