import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { Router } from '@angular/router';
import { apis } from '../consts/services';

@Injectable({ providedIn: 'root' })
export class AuthService {

    public isAuthenticated = new BehaviorSubject<boolean>(false);
    public authenticatedUser : BehaviorSubject<User | null>;
  
    USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
    username: string | undefined;
    password: string | undefined;
  
  
    constructor(
      private router: Router,
      private http: HttpClient
      ) {
  
        this.authenticatedUser = new BehaviorSubject<User | null>(null);
    }
  
    //Subscribe.
    authenticatedSubsciber = this.isAuthenticated.subscribe(
       (newValue) =>{
         console.log("Subscribed Value ",newValue);
         if(newValue || this.checkAuthenticated())
            this.getCurrentUser();
       }
    )
    
    registerSuccessfulLogin(username: string) {
      console.log("Success");
      sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
      
    }
  
    async checkAuthenticated(): Promise<boolean> {
      console.log("Checking Authenticated")
      let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
      console.log(user)
      if (user === null) return false
      return true
    }
  
    async login(username: string, password: string): Promise<void> {
      this.username = username;
      this.password = password;
      
      let reqHeaders = new HttpHeaders({
        'Content-Type':'application/x-www-form-urlencoded'
     });
     
      const payload = new HttpParams()
        .set('username', username)
        .set('password', password)
        .set('flowable-remember-me', true);
  
      console.log(payload);
  
      this.http.post(apis.LOGIN, payload, {headers: reqHeaders})
      .subscribe(
        (response) => {
          console.log("Success ", response)
          this.registerSuccessfulLogin(username)
          this.isAuthenticated.next(true);
  
  
        },
        (error) => {
          console.log("Error ", error)
          this.isAuthenticated.next(false);
  
        }
      )
       
     
    }
  
    async getCurrentUser(): Promise<void> {
      if(this.isAuthenticated.getValue() || this.checkAuthenticated()){
      this.http.get<User>(apis.USER_INFO)
          .subscribe(
            (response) => {
              console.log("User info {} ", response);
              this.authenticatedUser.next(response);
            }
          )
      }
      else{
        console.log("Not authenticated");
        this.router.navigate(["/login"]);
      }
    }
  
  
    async logout(redirect: string): Promise<void> {
      console.log("Logging out");
      this.http.get<any>(apis.LOGOUT).subscribe(
        (response) =>{
          this.isAuthenticated.next(false);
          sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
          this.authenticatedUser.next(null);
          this.username = "";
          this.password = "";
          this.router.navigate(["/login"]);

        },
        (error) =>{
          console.log("Handling error");
          this.isAuthenticated.next(false);
          sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
          this.authenticatedUser.next(null);
          this.username = "";
          this.password = "";
          this.router.navigate(["/login"]);
        }
      );
     
     

    }
  
   
    isUserLoggedIn() {
      let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
      if (user === null) return false
      return true
    }
  
    getLoggedInUserName() {
      let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
      if (user === null) return ''
      return user
    }
  
  
  
  }