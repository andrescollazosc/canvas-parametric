import { Component, OnInit } from '@angular/core';
import { TitleModel } from '../../models/title.model';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  public bigTitle: TitleModel;
  public paginationTitle: TitleModel;

  constructor() { }

  ngOnInit(): void {
    this.configTitles();
  }

  private configTitles(): void {
    this.bigTitle = {
      label: 'Links',
      class: 'title big-title',
    };
  
    this.paginationTitle = {
      label: 'Pagination',
      class: 'title medium-title',
    };
  }

}
