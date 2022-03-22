import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { routes } from 'src/app/consts';
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit  {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    if (await this.service.checkAuthenticated()) {
       console.log("Authenticated")
       this.service.getCurrentUser();
     }
   }

  authenticatedSub = this.service.authenticatedUser.subscribe(
    async (data) => {
      console.log("Route to home");
      if(await this.service.checkAuthenticated()){
        console.log(this.service.authenticatedUser.getValue());
        this.router.navigate(["/"],{state: {userInfo: this.service.authenticatedUser.getValue()}});
      }
      else{
        this.router.navigate(["/login"]);
      }

    }
  );



  public async sendLoginForm(data: any): Promise<void> {
    await this.service.login(data.username, data.password);

   // this.router.navigate([this.routers.DASHBOARD]).then();
  } 





}
