import { Component, Input, OnInit } from '@angular/core';
import { PromoboxModel } from '../../models/promobox.model';

@Component({
  selector: 'app-promobox',
  templateUrl: './promobox.component.html',
  styleUrls: ['./promobox.component.scss']
})
export class PromoboxComponent implements OnInit {

  @Input() configPromoBox: PromoboxModel;

  public labelBtn: string = 'read now';

  constructor() { }

  ngOnInit(): void {
  }

}
