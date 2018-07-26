import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { GridOverviewComponent } from '../grid-overview/grid-overview.component';
import { AngularPracticeComponent } from '../practice/angular-practice/angular-practice.component';
import { RxjsPracticeComponent } from '../practice/rxjs-practice/rxjs-practice.component';
import { TypescriptPracticeComponent } from '../practice/typescript-practice/typescript-practice.component';

const routes: Routes = [
  {
    path: '',
    component: GridOverviewComponent,
  },
  {
    path: 'Angular',
    component: AngularPracticeComponent,
  },
  {
    path: 'Typescript',
    component: TypescriptPracticeComponent,
  },
  {
    path: 'RxJS',
    component: RxjsPracticeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
