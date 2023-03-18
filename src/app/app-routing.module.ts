import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path :'user' , component : UserComponent},
  { path : 'databinding', component : DatabindingComponent},
   { path: 'landing', component : LandingComponent},
  { path : 'home',component : HomeComponent},
  {path: 'directive',component :DirectivesComponent },
 

  // lazy loading
  { path : 'home-module', loadChildren : () => import( './home/home.module').then(mod => mod.HomeModule) },
  { path : 'contactus-module', loadChildren : ()=> import('./contactus/contactus.module').then(mod => mod.ContactusModule)},
  { path : 'aboutus-module', loadChildren :() => import('./aboutus/aboutus.module').then(mod => mod.AboutusModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  
  // { path : "**", component : PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
