import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalPurchaseComponent } from './physical-purchase.component';

describe('PhysicalPurchaseComponent', () => {
  let component: PhysicalPurchaseComponent;
  let fixture: ComponentFixture<PhysicalPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicalPurchaseComponent]
    });
    fixture = TestBed.createComponent(PhysicalPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
