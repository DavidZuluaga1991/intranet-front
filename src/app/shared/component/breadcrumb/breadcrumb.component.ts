import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  public home: MenuItem = {};
  public items: MenuItem[] = [];

  constructor(private breadcrumb: BreadcrumbService) {}

  ngOnInit(): void {
    this.home = { icon: 'pi pi-home', routerLink: '/home' };
    this.breadcrumb.breadcrumbs$.subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }
}
