import { Component } from '@angular/core';
import { routes } from 'src/app/consts';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public routes: typeof routes = routes;
  public isOpenUiElements = false;

  isAuthenticated? : boolean;
  isHR?: boolean;
  isManager?: boolean;
  displayName?: string;

  constructor(
    private authService: AuthService
  ) {
  
  }

  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }

  userData = this.authService.authenticatedUser.subscribe(
    (data) => {
      if(data != null && data != undefined){
      
        this.displayName = data.displayName;

      }
    }
  )
}
