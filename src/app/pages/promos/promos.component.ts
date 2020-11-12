import { Component, OnInit } from '@angular/core';
import { PromoboxModel } from '../../models/promobox.model';
import { PromoboxMock } from '../../mocks/promobox.mock';
import { TitleModel } from '../../models/title.model';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss']
})
export class PromosComponent implements OnInit {

  public configModel: PromoboxModel[] = PromoboxMock.getInfoPromoBox();
  public bigTitle: TitleModel;
  public currentPromoboxTitle: TitleModel;
  public modernPromoboxTitle: TitleModel;

  constructor() { }

  ngOnInit(): void {
    this.configTitles();
  }

  private configTitles(): void {
    this.bigTitle = {
      label: 'Promobox',
      class: 'title big-title',
    };
  
    this.currentPromoboxTitle = {
      label: 'Current Promo box',
      class: 'title medium-title',
    };

    this.modernPromoboxTitle = {
      label: 'Modern Promo box',
      class: 'title medium-title',
    };
  }

}
