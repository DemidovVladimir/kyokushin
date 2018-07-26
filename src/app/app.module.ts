import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { GridOverviewComponent } from './grid-overview/grid-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    GridOverviewComponent
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
