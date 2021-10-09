import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manintenance',
  templateUrl: './manintenance.component.html',
  styleUrls: ['./manintenance.component.scss'],
})
export class ManintenanceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('hola mantenimiento');
  }
}
