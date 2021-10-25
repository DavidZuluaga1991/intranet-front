import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';

import { NewprofileRoutingModule } from './newprofile-routing.module';
import { NewprofileComponent } from './pages/newprofile/newprofile.component';
import { InputTextModule } from 'primeng/inputtext';
import { TreeModule } from 'primeng/tree';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [NewprofileComponent],
  imports: [
    CommonModule,
    NewprofileRoutingModule,
    InputSwitchModule,
    InputTextModule,
    TreeModule,
    ButtonModule,
    RippleModule,
  ],
})
export class NewprofileModule {}
