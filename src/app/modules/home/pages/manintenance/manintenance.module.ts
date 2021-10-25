import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManintenanceRoutingModule } from './manintenance-routing.module';
import { ManintenanceComponent } from './pages/manintenance/manintenance.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ManintenanceComponent],
  imports: [CommonModule, ManintenanceRoutingModule, SharedModule],
})
export class ManintenanceModule {}
