import { Component, Input, OnInit } from '@angular/core';
import { SecondaryButtonModel } from 'src/app/models/secondary-button.model';

@Component({
  selector: 'app-secondary-buttom',
  templateUrl: './secondary-buttom.component.html',
  styleUrls: ['./secondary-buttom.component.scss']
})
export class SecondaryButtomComponent implements OnInit {

  @Input() buttonModel: SecondaryButtonModel;

  constructor() { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    if (!this.buttonModel) {
      this.buttonModel = {
        class: "btn-outline-tertiary",
        text: 'Guardar'
      }
    }
  }

}
