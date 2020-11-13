import { Component, OnInit } from '@angular/core';
import { TitleModel } from '../../models/title.model';

@Component({
  selector: 'app-palete-colors',
  templateUrl: './palete-colors.component.html',
  styleUrls: [
    './palete-colors.component.scss',
    './palete-colors-primary.scss',
    './palete-colors-gray-scale.scss',
    './palete-colors-secondary.scss',
  ],
})
export class PaleteColorsComponent implements OnInit {
  public primaryColors: TitleModel;
  public greyScale: TitleModel;
  public secondaryColors: TitleModel;

  constructor() {}

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.primaryColors = {
      class: 'title medium-title',
      label: 'Primary Colors',
    };

    this.secondaryColors = {
      class: 'title medium-title',
      label: 'Secondary Colors',
    };

    this.greyScale = {
      class: 'title medium-title',
      label: 'Grey Scale',
    };
  }
}
