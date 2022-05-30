import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListComponent } from './app-list/app-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    PageNotFoundComponent,
    BmiCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
