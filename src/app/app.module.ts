import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Forms Angular
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// HTTP requests
import { HttpClientModule } from '@angular/common/http';

// Imports Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TechnicianListComponent } from './components/technician/technician-list/technician-list.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from "ngx-toastr";
import { AuthInterceptorProvider } from "./interceptors/auth.interceptor";
import { TechnicianCreateComponent } from './components/technician/technician-create/technician-create.component';
import { NgxMaskModule } from "ngx-mask";
import { TechnicianUpdateComponent } from './components/technician/technician-update/technician-update.component';
import { TechnicianDeleteComponent } from './components/technician/technician-delete/technician-delete.component';
import { CustomerListComponent } from "./components/customer/customer-list/customer-list.component";
import { CustomerCreateComponent } from "./components/customer/customer-create/customer-create.component";
import { CustomerUpdateComponent } from "./components/customer/customer-update/customer-update.component";
import { CustomerDeleteComponent } from "./components/customer/customer-delete/customer-delete.component";
import { RequestListComponent } from './components/request/request-list/request-list.component';
import { RequestCreateComponent } from './components/request/request-create/request-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    TechnicianListComponent,
    TechnicianCreateComponent,
    TechnicianUpdateComponent,
    TechnicianDeleteComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    RequestListComponent,
    RequestCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // HTTP requests
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
      ToastrModule.forRoot({
        timeOut: 4000,
        closeButton: true,
        progressBar: true
      }),
      NgxMaskModule.forRoot()
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }