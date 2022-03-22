import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  public loginInvalid = false;
  private formSubmitAttempt = false;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { 
      this.form = this.fb.group({
        username: ['', Validators.email],
        password: ['', Validators.required]
      });
    }

    async ngOnInit(): Promise<void> {
      if (await this.authService.checkAuthenticated()) {
         console.log("Authenticated")
         this.authService.getCurrentUser();
       }
     }
   
     authenticatedSub = this.authService.authenticatedUser.subscribe(
       async (data) => {
         console.log("Route to home");
         if(await this.authService.checkAuthenticated()){
           console.log(this.authService.authenticatedUser.getValue());
           this.router.navigate(["/"],{state: {userInfo: this.authService.authenticatedUser.getValue()}});
         }
         else{
           this.router.navigate(["/login"]);
         }
   
       }
     );
   
     async submit(): Promise<void> {
       console.log("On Submit")
       this.loginInvalid = false;
       this.formSubmitAttempt = false;
       
       if (this.form.valid) {
         try {
           const username = this.form.get('username')?.value;
           const password = this.form.get('password')?.value;
           console.log(username + "   "+ password);
           await this.authService.login(username, password);
         } catch (err) {
           console.log(err);
           this.loginInvalid = true;
         }
       } else {
         this.formSubmitAttempt = true;
       }
     }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

}
