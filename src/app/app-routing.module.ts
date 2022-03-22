import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/containers';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MywellnessComponent } from './components/mywellness/mywellness.component';
import { NewLoanComponent } from './components/new-loan/new-loan.component';
import { NewOrderComponent } from './components/new.order/new-order.component';
import { TaskFormComponent } from './components/task-page/task-form/task-form.component';
import { TaskPageComponent } from './components/task-page/task-page.component';

import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: NewOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'newOrder',
    component: NewOrderComponent,
    canActivate: [AuthGuard]

  },
 
  {
    path: 'ordertaskQueue',
    component: TaskPageComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'taskForm/:taskId',
    component: TaskFormComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full'

  },
  {
    path: 'newLoan',
    component: NewOrderComponent,
    canActivate: [AuthGuard]

  },
 
  {
    path: 'loantaskQueue',
    component: TaskPageComponent,
    canActivate: [AuthGuard]

  },
 
 // { path: 'login', component: LoginComponent },
  { path: 'login', component: AuthPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
