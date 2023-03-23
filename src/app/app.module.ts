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
import { CharaonlyDirective } from './charaonly.directive';
import { FormComponent } from './form/form.component';
import { NumonlyDirective } from './numonly.directive';
import { SearchtextPipe } from './searchtext.pipe';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatabindingComponent,
    // PagenotfoundComponent,
    HeaderComponent,
    DirectivesComponent,
    CharaonlyDirective,
    FormComponent,
    NumonlyDirective,
    SearchtextPipe,
    
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
