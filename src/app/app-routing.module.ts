import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';

const routes: Routes = [
  {
    path: 'biding',
    loadChildren: () => import('@modules/biding/biding.module').then(m => m.BidingModule)
  }, {
    path: '',
    redirectTo: 'biding',
    pathMatch: 'full'
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
