import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQueueLiveComponentComponent } from './customer-queue-live-component.component';

describe('CustomerQueueLiveComponentComponent', () => {
  let component: CustomerQueueLiveComponentComponent;
  let fixture: ComponentFixture<CustomerQueueLiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerQueueLiveComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerQueueLiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
