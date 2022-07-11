import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './workflow/component/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './workflow/component/footer/footer.component';
import { BodyComponent } from './workflow/component/body/body.component';
import {MatButtonModule} from "@angular/material/button";
import { NavBarComponent } from './workflow/component/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NavBarComponent,
    HomeComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FontAwesomeModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
