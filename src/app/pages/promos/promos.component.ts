import { Component, OnInit } from '@angular/core';
import { PromoboxModel } from '../../models/promobox.model';
import { PromoboxMock } from '../../mocks/promobox.mock';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss']
})
export class PromosComponent implements OnInit {

  public configModel: PromoboxModel[] = PromoboxMock.getInfoPromoBox();

  constructor() { }

  ngOnInit(): void {
  }

}
