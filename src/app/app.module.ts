import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { CardsComponent } from './pages/cards/cards.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { SecondaryCardComponent } from './components/secondary-card/secondary-card.component';
import { SecondaryButtomComponent } from './components/secondary-buttom/secondary-buttom.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonsComponent,
    PrimaryButtonComponent,
    CardsComponent,
    PeopleCardComponent,
    SecondaryCardComponent,
    SecondaryButtomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
