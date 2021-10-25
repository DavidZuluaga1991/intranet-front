import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewprofileComponent } from './pages/newprofile/newprofile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NewprofileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewprofileRoutingModule {}
