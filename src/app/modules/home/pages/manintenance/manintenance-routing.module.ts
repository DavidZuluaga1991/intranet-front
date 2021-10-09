import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManintenanceComponent } from './pages/manintenance/manintenance.component';

const routes: Routes = [
  {
    path: '',
    component: ManintenanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManintenanceRoutingModule {}
