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
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { CardsCustomComponent } from './component/cards-custom/cards-custom.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LayoutComponent, BreadcrumbComponent, CardsCustomComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    CoreModule,
    RouterModule,
    PanelMenuModule,
    BreadcrumbModule,
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
    CardsCustomComponent,
  ],
})
export class SharedModule {}
