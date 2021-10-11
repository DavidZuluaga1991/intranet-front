import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menu } from 'src/app/config/menu';

@Component({
  selector: 'app-manintenance',
  templateUrl: './manintenance.component.html',
  styleUrls: ['./manintenance.component.scss'],
})
export class ManintenanceComponent implements OnInit {
  public menus: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    const tempmenu = menu[0].items && menu[0].items[0].items ? menu[0].items[0].items : undefined;
    if (tempmenu) {
      this.menus = tempmenu;
    }
  }
}
