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
import { FormComponent } from './form/form.component';
import { SearchtextPipe } from './searchtext.pipe';
import { CurrencyPipe } from './currency.pipe';
import { SharedModule } from './shared/shared.module';
import { AngularFormsModule } from './angular-forms/angular-forms.module';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatabindingComponent,
    // PagenotfoundComponent,
    HeaderComponent,
    DirectivesComponent,
    // CharaonlyDirective,
    FormComponent,
    // NumonlyDirective,
    SearchtextPipe,
    CurrencyPipe,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HomeModule,
      SharedModule,
    AngularFormsModule
     
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
