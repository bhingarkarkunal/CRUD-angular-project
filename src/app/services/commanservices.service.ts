import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstantsService } from '../constants/app-constants.service';

declare var jquery: any;
declare var $: any;


@Injectable({
  providedIn: 'root'
})
export class CommanservicesService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
  headers: Headers;
  timeZone: any;
  constructor(private router: Router, public http: HttpClient, public appConstants: AppConstantsService, ) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json; charset=utf-8');
    this.headers.append('Accepts', '*/*');
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }

  sendMessage(message: string) {
    this.subject.next(message);
  }

  clearMessages() {
    this.subject.next();
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  /**
   * Post Request
   */

  getRequestwithoutAuth(url: string): Observable<any> {
    return this.http.get<any>(this.appConstants.HOME_URL + url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getRequest(url: string): Observable<any> {
    return this.http.get<any>(this.appConstants.HOME_URL + url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'timezone': this.timeZone })
    });
  }

  getGoogleContact(url: string): Observable<any> {
    return this.http.get<any>(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('ct')})
    });
  }
  postRequest(data: any, url: string): Observable<any> {
    
    return this.http.post<any>(this.appConstants.HOME_URL + url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'timezone': this.timeZone }) });
  }

  putRequest(data: any, url: string): Observable<any> {
    return this.http.put<any>(this.appConstants.HOME_URL + url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'timezone': this.timeZone }) });
  }

  Loginrequest(data: any, url: string): Observable<any> {
    return this.http.post<any>(this.appConstants.HOME_URL + url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'timezone': this.timeZone }) });
  }

  deleteRequest(url: string): Observable<any> {
    return this.http.delete<any>(this.appConstants.HOME_URL + url, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'timezone': this.timeZone }) });
  }

}




