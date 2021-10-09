import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CoreModule } from '../core/core.module';
import { LayoutComponent } from './component/layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    CoreModule,
    RouterModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    CoreModule,
    RouterModule,
    LayoutComponent,
  ],
})
export class SharedModule {}
