import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManintenanceComponent } from './manintenance.component';

describe('ManintenanceComponent', () => {
  let component: ManintenanceComponent;
  let fixture: ComponentFixture<ManintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
