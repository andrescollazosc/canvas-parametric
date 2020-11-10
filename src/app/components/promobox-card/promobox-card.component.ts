import { Component, Input, OnInit } from '@angular/core';
import { PromoboxModel } from '../../models/promobox.model';

@Component({
  selector: 'app-promobox-card',
  templateUrl: './promobox-card.component.html',
  styleUrls: ['./promobox-card.component.scss']
})
export class PromoboxCardComponent implements OnInit {

  @Input() configPromoBox: PromoboxModel;

  constructor() { }

  ngOnInit(): void {
  }

}
