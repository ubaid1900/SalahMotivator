import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphabetCssComponent } from './components/alphabet-css/alphabet-css.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagePhrasesComponent } from './components/manage-phrases/manage-phrases.component';
import { CssTrialsComponent } from './components/css-trials/css-trials.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'managePhrases', component: ManagePhrasesComponent },
  { path: 'css', component: CssTrialsComponent },
  { path: 'alphabets', component: AlphabetCssComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
