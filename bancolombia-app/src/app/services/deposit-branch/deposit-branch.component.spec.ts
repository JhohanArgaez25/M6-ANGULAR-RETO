import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositBranchComponent } from './deposit-branch.component';

describe('DepositBranchComponent', () => {
  let component: DepositBranchComponent;
  let fixture: ComponentFixture<DepositBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositBranchComponent]
    });
    fixture = TestBed.createComponent(DepositBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
