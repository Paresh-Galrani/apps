import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { CharacterCounter } from './character-counter/character-counter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {component: AppListComponent, path: 'home'},
  {component: BmiCalculatorComponent, path: 'bmi'},
  {component: CharacterCounter, path:'character-counter'},
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
