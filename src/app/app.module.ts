import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MywellnessComponent } from './components/mywellness/mywellness.component';
import { VaccinationComponent } from './components/mywellness/vaccination/vaccination.component';
import { TestingComponent } from './components/mywellness/testing/testing.component';
import { EtsComponent } from './components/mywellness/ets/ets.component';
import { ContactsComponent } from './components/mywellness/contacts/contacts.component';
import { ManagerComponent } from './components/mywellness/manager/manager.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { SharedModule } from './shared/shared.module';
import { AuthPageComponent } from './auth/containers';
import { LoginFormComponent } from './auth/components';
import { CommonModule } from '@angular/common';
import { FlwformComponent } from './components/shared/flwform/flwform.component';
import { NewOrderComponent } from './components/new.order/new-order.component';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { TaskTableComponent } from './components/task-page/task-table/task-table.component';
import { TaskFormComponent } from './components/task-page/task-form/task-form.component';
import { NewLoanComponent } from './components/new-loan/new-loan.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MywellnessComponent,
    VaccinationComponent,
    TestingComponent,
    EtsComponent,
    ContactsComponent,
    ManagerComponent,
    LoginComponent,
    LogoutComponent,
    LoginFormComponent,
    AuthPageComponent,
    NewOrderComponent,
    FlwformComponent,
    TaskPageComponent,
    TaskTableComponent,
    TaskFormComponent,
    NewLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    SharedModule

  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
