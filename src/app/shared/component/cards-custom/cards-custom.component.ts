import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cards-custom',
  templateUrl: './cards-custom.component.html',
  styleUrls: ['./cards-custom.component.scss'],
})
export class CardsCustomComponent implements OnInit {
  @Input() cards: MenuItem[] | undefined = [];

  constructor() {}

  ngOnInit(): void {
    console.log('hola');
  }
}
