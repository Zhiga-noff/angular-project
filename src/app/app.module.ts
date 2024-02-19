import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

// const API_BASE_URL = 'api.mysite.com';
const API_BASE_URL = new InjectionToken('API_BASE_URL');

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, UsersComponent, UserComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
