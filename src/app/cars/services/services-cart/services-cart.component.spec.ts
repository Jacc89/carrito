import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCartComponent } from './services-cart.component';

describe('ServicesCartComponent', () => {
  let component: ServicesCartComponent;
  let fixture: ComponentFixture<ServicesCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
