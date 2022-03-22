import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, VaccinationInfo } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mywellness',
  templateUrl: './mywellness.component.html',
  styleUrls: ['./mywellness.component.scss']
})
export class MywellnessComponent implements OnInit {

  userInfo: User | null = null;
  
  

  constructor( private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {

     }

  ngOnInit(): void {
  }

  authenticatedSub = this.authService.authenticatedUser.subscribe(
    async (data) => {
      this.userInfo = data
    }
  );

}
