import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQueueTabComponentComponent } from './customer-queue-tab-component.component';

describe('CustomerQueueTabComponentComponent', () => {
  let component: CustomerQueueTabComponentComponent;
  let fixture: ComponentFixture<CustomerQueueTabComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerQueueTabComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerQueueTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
