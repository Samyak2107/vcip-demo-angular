import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQueueInterfaceComponent } from './customer-queue-interface.component';

describe('CustomerQueueInterfaceComponent', () => {
  let component: CustomerQueueInterfaceComponent;
  let fixture: ComponentFixture<CustomerQueueInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerQueueInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerQueueInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
