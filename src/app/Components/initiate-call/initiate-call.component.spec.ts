import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateCallComponent } from './initiate-call.component';

describe('InitiateCallComponent', () => {
  let component: InitiateCallComponent;
  let fixture: ComponentFixture<InitiateCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiateCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
