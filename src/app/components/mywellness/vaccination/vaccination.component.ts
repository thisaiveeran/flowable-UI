import { Component, Input, OnInit } from '@angular/core';
import { VaccinationInfo } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.scss']
})
export class VaccinationComponent implements OnInit {

   vaccinationInfo = new VaccinationInfo()

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
   
  }

  

}
