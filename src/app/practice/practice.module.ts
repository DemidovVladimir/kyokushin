import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularPracticeComponent } from './angular-practice/angular-practice.component';
import { RxjsPracticeComponent } from './rxjs-practice/rxjs-practice.component';
import { TypescriptPracticeComponent } from './typescript-practice/typescript-practice.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AngularPracticeComponent,
    TypescriptPracticeComponent,
    RxjsPracticeComponent
  ],
})
export class PracticeModule { }
