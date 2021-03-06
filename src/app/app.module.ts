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
import { PaginationComponent } from './components/pagination/pagination.component';
import { LinksComponent } from './pages/links/links.component';
import { PromoboxComponent } from './components/promobox/promobox.component';
import { PromosComponent } from './pages/promos/promos.component';
import { PromoboxCardComponent } from './components/promobox-card/promobox-card.component';
import { TitleComponent } from './components/title/title.component';
import { ColorPageComponent } from './pages/color-page/color-page.component';
import { PaleteColorsComponent } from './components/palete-colors/palete-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonsComponent,
    PrimaryButtonComponent,
    CardsComponent,
    PeopleCardComponent,
    SecondaryCardComponent,
    SecondaryButtomComponent,
    PaginationComponent,
    LinksComponent,
    PromoboxComponent,
    PromosComponent,
    PromoboxCardComponent,
    TitleComponent,
    ColorPageComponent,
    PaleteColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
