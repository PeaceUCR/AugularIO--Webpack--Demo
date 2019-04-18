import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  {
    path: 'crisis-center',
    loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',//loadChildren->lazy-loading https://angular.io/guide/router#milestone-6-asynchronous-routing
    data: { preload: true }
  },
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },//applies the redirect if and only if navigating to '/'
  { path: '**', component: PageNotFoundComponent }//https://angular.io/api/router/Route#wild-cards
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService//https://angular.io/guide/router#custom-preloading-strategy
      }
    )
  ]
})
export class AppRoutingModule { }
