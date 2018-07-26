import { Component, OnInit } from '@angular/core';
import { GridItem } from './grid-overview.model';
import { overviewImages } from './img-list.const';

@Component({
  selector: 'app-grid-overview',
  templateUrl: './grid-overview.component.html',
  styleUrls: ['./grid-overview.component.scss']
})
export class GridOverviewComponent implements OnInit {
  name: string;
  href: string;
  imageArray: GridItem[];

  constructor() {
    this.imageArray = overviewImages;
  }

  ngOnInit() {
  }

}
