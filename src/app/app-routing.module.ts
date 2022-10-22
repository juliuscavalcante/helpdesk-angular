import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from "./components/nav/nav.component";
import { TechnicianListComponent } from "./components/technician/technician-list/technician-list.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { TechnicianCreateComponent } from "./components/technician/technician-create/technician-create.component";
import { TechnicianUpdateComponent } from "./components/technician/technician-update/technician-update.component";
import { TechnicianDeleteComponent } from "./components/technician/technician-delete/technician-delete.component";
import { CustomerListComponent} from "./components/customer/customer-list/customer-list.component";
import { CustomerCreateComponent } from "./components/customer/customer-create/customer-create.component";
import { CustomerUpdateComponent}  from "./components/customer/customer-update/customer-update.component";
import { CustomerDeleteComponent } from "./components/customer/customer-delete/customer-delete.component";
import { RequestListComponent } from "./components/request/request-list/request-list.component";
import { RequestCreateComponent } from "./components/request/request-create/request-create.component";
import {RequestUpdateComponent} from "./components/request/request-update/request-update.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },

      { path: 'technician', component: TechnicianListComponent },
      { path: 'technician/create', component: TechnicianCreateComponent },
      { path: 'technician/update/:id', component: TechnicianUpdateComponent },
      { path: 'technician/delete/:id', component: TechnicianDeleteComponent },

      { path: 'customer', component: CustomerListComponent },
      { path: 'customer/create', component: CustomerCreateComponent },
      { path: 'customer/update/:id', component: CustomerUpdateComponent },
      { path: 'customer/delete/:id', component: CustomerDeleteComponent },

      { path: 'requests', component: RequestListComponent },
      { path: 'requests/create', component: RequestCreateComponent },
      { path: 'requests/update/:id', component: RequestUpdateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
