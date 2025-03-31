import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositAtmComponent } from './deposit-atm.component';

describe('DepositAtmComponent', () => {
  let component: DepositAtmComponent;
  let fixture: ComponentFixture<DepositAtmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositAtmComponent]
    });
    fixture = TestBed.createComponent(DepositAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
