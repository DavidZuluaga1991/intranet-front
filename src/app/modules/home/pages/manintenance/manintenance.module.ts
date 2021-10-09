import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManintenanceRoutingModule } from './manintenance-routing.module';
import { ManintenanceComponent } from './pages/manintenance/manintenance.component';

@NgModule({
  declarations: [ManintenanceComponent],
  imports: [CommonModule, ManintenanceRoutingModule],
})
export class ManintenanceModule {}
