import { Component, OnInit } from '@angular/core';
import { SecondaryButtonModel } from '../../models/secondary-button.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  public buttonModel: SecondaryButtonModel[] = [];
  public buttonNomalModel: SecondaryButtonModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.configButton();
    this.configNormalButtons();
  }

  private configButton(): void {
    this.buttonModel = [
      {
        text: 'Guardar',
        class: "btn-outline-primary",
      },
      {
        text: 'Actualizar',
        class: "btn-outline-secondary",
      },
      {
        text: 'Información',
        class: "btn-outline-tertiary",
      }
    ];
  }

  private configNormalButtons(): void {
    this.buttonNomalModel = [
      {
        text: 'Guardar',
        class: "btn-primary",
      },
      {
        text: 'Actualizar',
        class: "btn-secondary",
      },
      {
        text: 'Información',
        class: "btn-tertiary",
      }
    ];
  }

}
