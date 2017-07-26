import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
  { path: '',   
    component: HomeComponent  // The default route
	},
  { path: 'dashboard',   
    component: DashboardComponent   // The dashboard route
	},
  {
    path: 'register',
    component: RegisterComponent    // The register route
  },
  {
    path: 'login',
    component: LoginComponent    // The register route
  },
  {
    path: 'profile',
    component: ProfileComponent    // The register route
  },
  { path: '**', 
    component: HomeComponent     // The "Catch-All" route
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
