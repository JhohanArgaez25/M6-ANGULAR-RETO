import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPurchaseComponent } from './web-purchase.component';

describe('WebPurchaseComponent', () => {
  let component: WebPurchaseComponent;
  let fixture: ComponentFixture<WebPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebPurchaseComponent]
    });
    fixture = TestBed.createComponent(WebPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
