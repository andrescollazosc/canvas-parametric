import { Component, OnInit } from '@angular/core';
import { RoutesConstants } from 'src/app/constants/routes.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public routes = { ...RoutesConstants.ROUTES };

  constructor() { }

  ngOnInit(): void {
  }

}
