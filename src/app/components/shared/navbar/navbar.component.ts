import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated? : boolean;
  isHR?: boolean;
  isManager?: boolean;
  displayName?: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  isActiveSub = this.authService.isAuthenticated.subscribe(
    (data) => {
      console.log("Is authenticated ", data);
      this.isAuthenticated = data;

    }
  )

  userData = this.authService.authenticatedUser.subscribe(
    (data) => {
      if(data != null && data != undefined){
     
        this.displayName = data.displayName;

      }
    }
  )

}
