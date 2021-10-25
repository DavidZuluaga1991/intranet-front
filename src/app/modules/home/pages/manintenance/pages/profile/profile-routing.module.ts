import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'new',
        data: { breadcrumb: 'Nuevo' },
        loadChildren: () => import('./pages/newprofile/newprofile.module').then(m => m.NewprofileModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
