import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TestingInfo } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  testingInfo = new TestingInfo()
  nextTestDate?: any;
  
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    
  }

 
}
