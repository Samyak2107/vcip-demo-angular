import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyOfflineComponent } from './currently-offline.component';

describe('CurrentlyOfflineComponent', () => {
  let component: CurrentlyOfflineComponent;
  let fixture: ComponentFixture<CurrentlyOfflineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlyOfflineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlyOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
