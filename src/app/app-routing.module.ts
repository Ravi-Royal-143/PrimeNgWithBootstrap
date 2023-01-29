import { inject, Injector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';
import { CanMatchLocal } from './can-match.service';
import { DefaultModuleComponent } from './modules/default-module/default-module.component';

export let AppInjector: Injector
const routes: Routes = [
  {
    path: '',
    component: DefaultModuleComponent
  },
  // the below is not working so commneted
  // {
  //   path: 'test',
  //   canActivateChild: [
  //     () => { 
  //     console.log('true'),
  //     true
  //   }],
  //   loadChildren: async () => {
  //     console.log('inside')
  //     const isActive = AppInjector.get(AppService).isActive
  //     if (isActive) {
  //       return (await import('./modules/module1/module1.module')).Module1Module
  //     } else {
  //       return (await import('./modules/module2/module2.module')).Module2Module
  //     }
  //   }
  // }

  // the below code works need to add the {onSameUrlNavigation: 'reload'} in the forRoots
  {
    path: 'test',
    canMatch: [CanMatchLocal],
    loadChildren: () => import('./modules/module1/module1.module').then((m) => m.Module1Module)
  },
  {
    path: 'test',
    loadChildren: () => import('./modules/module2/module2.module').then((m) => m.Module2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})], // this onSameUrlNavigation is needed to check again
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private injector: Injector) {
    AppInjector = injector
  }
}
