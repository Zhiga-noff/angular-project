import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserCardComponent } from './user-card/user-card.component';
import { DIService } from './di.service';

// const API_BASE_URL = 'api.mysite.com';
const API_BASE_URL = new InjectionToken('API_BASE_URL');

@NgModule({
  declarations: [AppComponent, UserCardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    UserService,
    // Идентичная запись DIService
    {
      provide: DIService,
      useClass: DIService,
    },
    //   Если зависимость не класс
    { provide: API_BASE_URL, useValue: 'api.mysite.com' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
