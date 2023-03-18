import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';
import { DirectivesComponent } from './directives/directives.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatabindingComponent,
    // PagenotfoundComponent,
    HeaderComponent,
    DirectivesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
