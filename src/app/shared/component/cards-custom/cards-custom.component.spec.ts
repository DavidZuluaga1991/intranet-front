import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCustomComponent } from './cards-custom.component';

describe('CardsCustomComponent', () => {
  let component: CardsCustomComponent;
  let fixture: ComponentFixture<CardsCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
