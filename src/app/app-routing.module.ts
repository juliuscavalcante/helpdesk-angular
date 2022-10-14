import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from "./components/nav/nav.component";
import { TechnicianListComponent } from "./components/technician-list/technician-list.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import {TechnicianCreateComponent} from "./components/technician/technician-create/technician-create.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },

      { path: 'technician', component: TechnicianListComponent },
      { path: 'technician/create', component: TechnicianCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
