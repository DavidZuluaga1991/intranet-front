import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'manintenance',
        data: { breadcrumb: 'Mantenimiento' },
        loadChildren: () => import('./pages/manintenance/manintenance.module').then(m => m.ManintenanceModule),
      },
      {
        path: 'projects',
        data: { breadcrumb: 'Proyectos' },
        loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
