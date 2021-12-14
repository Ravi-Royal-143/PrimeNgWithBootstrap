import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidingComponent } from './biding.component';

const routes: Routes = [
    {
        path: '',
        component: BidingComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BidingRoutingModule { }
