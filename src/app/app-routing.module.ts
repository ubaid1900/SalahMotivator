import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagePhrasesComponent } from './components/manage-phrases/manage-phrases.component';
import { CssTrialsComponent } from './components/css-trials/css-trials.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'managePhrases', component: ManagePhrasesComponent },
  { path: 'css', component: CssTrialsComponent },
  { path: 'alphabets', loadChildren: './components/alphabet-css/alphabet-css.module#AlphabetCssModule' }
  // {
  //   path: 'alphabets', loadChildren:
  //     () => import('./components/alphabet-css/alphabet-css.module')
  //       .then(m => m.AlphabetCssModule)
  // }
];
// { path: 'alphabets', component: AlphabetCssComponent }];

@NgModule({
  // https://web.dev/route-preloading-in-angular/
  // https://medium.com/@prowe214/lazy-loading-vs-preloading-modules-which-should-you-choose-85a1fb71a24
  // GIST of above links: lazy loaded modules are pre-loaded whenever angular runtime finds some bandwidth later after the initial load
  // so when a lazy loaded route is requested, it can be accessed faster. With no strategy specified they will only be loaded on demand
  // Another strategy 'QuicklinkStrategy' via ngx-quicklink package uses intersection provider and preloads the modules of the visible links
  // the first link links to another strategy called guess which tries to guess the users probable next actions and load the modules accordingly
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
