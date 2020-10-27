import { Component, Input, OnInit } from '@angular/core';
import { SecondCardModel } from 'src/app/models/secondary-card.model';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.scss']
})
export class SecondaryCardComponent implements OnInit {

  @Input() cardModel: SecondCardModel;

  constructor() { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    if (!this.cardModel) {
      this.cardModel = {
        img: 'assets/img/avatar.png',
        authorName: 'Name...',
        authorCharge: 'Profession..'
      };
    } else {
      if (!this.cardModel.img) {
        this.cardModel.img = 'assets/img/avatar.png';
      }
    }
  }

}
