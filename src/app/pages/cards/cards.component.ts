import { Component, OnInit } from '@angular/core';
import { SecondCardModel } from '../../models/secondary-card.model';
import { TitleModel } from '../../models/title.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cardModel: SecondCardModel[] = [];

  public bigTitle: TitleModel;
  public firstTitle: TitleModel;
  public secondTitle: TitleModel;

  constructor() { }  

  ngOnInit(): void {
    this.configTitles();
    this.getDataCards();
  }

  private configTitles(): void {
    this.bigTitle = {
      label: 'Cards',
      class: 'title big-title',
    };
  
    this.firstTitle = {
      label: 'First version',
      class: 'title medium-title',
    };
  
    this.secondTitle = {
      label: 'Second version',
      class: 'title medium-title',
    };
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
        text: 'See more',
        class: "btn-outline-secondary"
      }
    }];
  }

}
