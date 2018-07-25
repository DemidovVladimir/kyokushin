import { Component, OnInit } from '@angular/core';
import { ImageGridArray } from './grid-overview.model';
import { overviewImages } from './img-list.const';

@Component({
  selector: 'app-grid-overview',
  templateUrl: './grid-overview.component.html',
  styleUrls: ['./grid-overview.component.scss']
})
export class GridOverviewComponent implements OnInit {
  name: string;
  href: string;
  imageArray: ImageGridArray[];

  constructor() {
    this.imageArray = overviewImages;
  }

  ngOnInit() {
  }

}
