import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { GridOverviewComponent } from './grid-overview/grid-overview.component';
import { AngularPracticeComponent } from './practice/angular-practice/angular-practice.component';
import { TypescriptPracticeComponent } from './practice/typescript-practice/typescript-practice.component';
import { RxjsPracticeComponent } from './practice/rxjs-practice/rxjs-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    GridOverviewComponent,
    AngularPracticeComponent,
    TypescriptPracticeComponent,
    RxjsPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
