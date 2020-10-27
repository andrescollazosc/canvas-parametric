import { Component, OnInit } from '@angular/core';
import { SecondCardModel } from '../../models/secondary-card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cardModel: SecondCardModel[] = [];

  constructor() { }  

  ngOnInit(): void {
    this.getDataCards();
  }

  private getDataCards(): void {
    this.cardModel = [{
      img: 'assets/img/architect.PNG',
      authorName: 'Carlos Gonzales',
      authorCharge: 'Software architect',
      button: {
        text: 'About me',
        class: "btn-outline-tertiary"
      }
    },
    {
      img: 'assets/img/senior-dev.PNG',
      authorName: 'Andres Collazos C',
      authorCharge: 'Senior developer',
      button: {
        text: 'BIO',
        class: "btn-outline-primary"
      }
    },
    {
      img: 'assets/img/front-end.PNG',
      authorName: 'Tania Bertolozzi',
      authorCharge: 'User experience',
      button: {
        text: 'Guardar',
        class: "btn-outline-secondary"
      }
    }];
  }

}
