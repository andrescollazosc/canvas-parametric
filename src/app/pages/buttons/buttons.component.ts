import { Component, OnInit } from '@angular/core';
import { SecondaryButtonModel } from '../../models/secondary-button.model';
import { TitleModel } from '../../models/title.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  public labelBtn: string = 'BIO';
  public buttonModel: SecondaryButtonModel[] = [];
  public buttonNomalModel: SecondaryButtonModel[] = [];
  public bigTitle: TitleModel;
  public buttonsTitle: TitleModel;
  public outlineTitle: TitleModel;
  public staticTitle: TitleModel;

  constructor() {}

  ngOnInit(): void {
    this.configTitles();
    this.configButton();
    this.configNormalButtons();
  }

  private configTitles(): void {
    this.bigTitle = {
      label: 'Buttons',
      class: 'title big-title',
    };
  
    this.buttonsTitle = {
      label: 'First Buttons',
      class: 'title medium-title',
    };
  
    this.outlineTitle = {
      label: 'Outline buttons',
      class: 'title medium-title',
    };
  
    this.staticTitle = {
      label: 'Static buttons',
      class: 'title medium-title',
    };  
  }

  private configButton(): void {
    this.buttonModel = [
      {
        text: 'Save',
        class: 'btn-outline-primary',
      },
      {
        text: 'Update',
        class: 'btn-outline-secondary',
      },
      {
        text: 'Save',
        class: 'btn-outline-tertiary',
      },
    ];
  }

  private configNormalButtons(): void {
    this.buttonNomalModel = [
      {
        text: 'Save',
        class: 'btn-primary',
      },
      {
        text: 'Update',
        class: 'btn-secondary',
      },
      {
        text: 'Info',
        class: 'btn-tertiary',
      },
    ];
  }
}
