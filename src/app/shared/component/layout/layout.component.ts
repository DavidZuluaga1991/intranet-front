import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/config/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public home: MenuItem = menu[0];
  public items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    if (menu[0].items) {
      this.items = menu[0].items;
    }
  }
}
