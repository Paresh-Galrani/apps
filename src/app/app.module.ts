import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListComponent } from './app-list/app-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CharacterCounter } from './character-counter/character-counter.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    PageNotFoundComponent,
    BmiCalculatorComponent,
    CharacterCounter,
    VideoThumbnailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    FormsModule,
  ]
})
export class AppModule { }
