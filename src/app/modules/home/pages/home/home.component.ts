import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menu } from 'src/app/config/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public menus: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    if (menu[0].items) {
      this.menus = menu[0].items;
    }
  }
}
