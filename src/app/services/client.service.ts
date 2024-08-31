import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './backend-details';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  http:HttpClient
  constructor(
    http: HttpClient
  ) { this.http = http}
  public loginStatusSubject = new Subject<boolean>();

  public setPanId(panId:any){
    localStorage.setItem('panId',panId);
  }
  public getPanId(){
    return localStorage.getItem('panId');
  }

  public logout(){
    localStorage.removeItem('panId');
    this.loginStatusSubject.next(false);
  }
  public isLogedIn(){
    let panId  = localStorage.getItem('panId');
    console.log("this is pan ",panId)
    if(panId == undefined || panId == '' || panId == null){
      return false;
    }else{
      return true;
    }
  }
  public getCustomerDetails(panId:any){
    return this.http.get(`${baseUrl}/${panId}`);
  }
}
