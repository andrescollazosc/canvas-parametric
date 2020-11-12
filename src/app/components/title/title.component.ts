import { Component, Input, OnInit } from '@angular/core';
import { TitleModel } from '../../models/title.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() titleModel: TitleModel;

  constructor() { }

  ngOnInit(): void {
    if (!this.titleModel) {
      this.titleModel = {
        label: 'Title',
        class: 'title big-title'
      };
    }
  }

}
