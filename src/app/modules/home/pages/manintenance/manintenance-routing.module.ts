import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManintenanceComponent } from './pages/manintenance/manintenance.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ManintenanceComponent,
      },
      {
        path: 'profile',
        data: { breadcrumb: 'Perfil' },
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManintenanceRoutingModule {}
