import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/component/layout/layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule),
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '',
  // },
  {
    path: '',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
