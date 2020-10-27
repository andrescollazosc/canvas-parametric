import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { RoutesConstants } from './constants/routes.constants';

const ROUTES = { ...RoutesConstants.ROUTES };

const routes: Routes = [
  { path: ROUTES.BUTTONS, component: ButtonsComponent },
  { path: ROUTES.CARDS, component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
