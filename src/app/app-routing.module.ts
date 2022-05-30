import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {component: AppListComponent, path: 'home'},
  {component: BmiCalculatorComponent, path: 'bmi'},
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
