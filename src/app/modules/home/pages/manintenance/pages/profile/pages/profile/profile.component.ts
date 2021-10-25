import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menu } from 'src/app/config/menu';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public menus: MenuItem[] | undefined = [];
  constructor() {}

  ngOnInit(): void {
    const tempmenu = menu[0].items && menu[0].items[0].items ? menu[0].items[0].items : undefined;
    if (tempmenu) {
      this.menus = tempmenu && tempmenu.length > 0 ? tempmenu[1].items : undefined;
    }
  }
}
