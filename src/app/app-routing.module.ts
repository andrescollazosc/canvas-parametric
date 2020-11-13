import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { RoutesConstants } from './constants/routes.constants';
import { LinksComponent } from './pages/links/links.component';
import { PromosComponent } from './pages/promos/promos.component';
import { ColorPageComponent } from './pages/color-page/color-page.component';

const ROUTES = { ...RoutesConstants.ROUTES };

const routes: Routes = [
  { path: ROUTES.BUTTONS, component: ButtonsComponent },
  { path: ROUTES.CARDS, component: CardsComponent },
  { path: ROUTES.LINKS, component: LinksComponent },
  { path: ROUTES.PROMOS, component: PromosComponent },
  { path: ROUTES.COLORS, component: ColorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
