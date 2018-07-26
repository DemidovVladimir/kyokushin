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
  elevationValue: number;

  constructor() {
    this.elevationValue = 15;
    this.imageArray = overviewImages;
  }

  ngOnInit() {
  }



}
