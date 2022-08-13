import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { CharacterCounter } from './character-counter/character-counter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';

const routes: Routes = [
  { component: AppListComponent, path: 'home' },
  { component: BmiCalculatorComponent, path: 'bmi' },
  { component: CharacterCounter, path: 'character-counter' },
  { component: VideoThumbnailComponent, path: 'video-thumb' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
