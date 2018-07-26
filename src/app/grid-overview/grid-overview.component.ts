import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {
    this.imageArray = overviewImages;
  }

  ngOnInit() {
  }

  redirect() {
    const route = this.name;
    console.log(this);
    this.router.navigate([`./${route}`]);
  }

}
