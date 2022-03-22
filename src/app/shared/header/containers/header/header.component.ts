import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


import { routes } from '../../../../consts';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();

  isAuthenticated? : boolean;
  isHR?: boolean;
  isManager?: boolean;
  displayName?: string;

 // public user$: Observable<User>
 // public emails$: Observable<Email[]>
  public routers: typeof routes = routes;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this.authService.logout("/login");

   // this.router.navigate([this.routers.LOGIN]);
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
