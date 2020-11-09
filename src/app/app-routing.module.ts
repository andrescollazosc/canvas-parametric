import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { RoutesConstants } from './constants/routes.constants';
import { LinksComponent } from './pages/links/links.component';

const ROUTES = { ...RoutesConstants.ROUTES };

const routes: Routes = [
  { path: ROUTES.BUTTONS, component: ButtonsComponent },
  { path: ROUTES.CARDS, component: CardsComponent },
  { path: ROUTES.LINKS, component: LinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
