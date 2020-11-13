import { Component, OnInit } from '@angular/core';
import { TitleModel } from '../../models/title.model';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.scss']
})
export class ColorPageComponent implements OnInit {

  public bigTitle: TitleModel;
  public paleteColors: TitleModel;

  constructor() { }

  ngOnInit(): void {
    this.configTitles();
  }

  private configTitles(): void {
    this.bigTitle = {
      label: 'Colors',
      class: 'title big-title',
    };

    this.paleteColors = {
      label: 'Gray Scale',
      class: 'title medium-title',
    };
  }

}
