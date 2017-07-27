import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';

const appRoutes: Routes = [
  { path: '',   
    component: HomeComponent  // The default route
	},
  { path: 'dashboard',   
    component: DashboardComponent,   // The dashboard route
    canActivate: [AuthGuard]
	},
  {
    path: 'register',
    component: RegisterComponent,    // The register route
    canActivate: [NotAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,    // The register route
    canActivate: [NotAuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,    // The register route
    canActivate: [AuthGuard]
  },
  {
    path: 'blog',
    component: BlogComponent,    // The register route
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-blog/:id',
    component: EditBlogComponent,    // The register route
    canActivate: [AuthGuard]
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
