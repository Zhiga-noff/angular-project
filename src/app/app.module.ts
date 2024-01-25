import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { UserCardComponent } from './header/user-card/user-card.component';
import { ItemComponent } from './item/item.component';
import { ColoryDirective } from './colory.directive';
import { DelayDirective } from './delay.directive';
import { DinamycComponent } from './dinamyc/dinamyc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    UserCardComponent,
    ItemComponent,
    ColoryDirective,
    DelayDirective,
    DinamycComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
