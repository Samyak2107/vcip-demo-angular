import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantPermissionsVkycComponent } from './grant-permissions-vkyc.component';

describe('GrantPermissionsVkycComponent', () => {
  let component: GrantPermissionsVkycComponent;
  let fixture: ComponentFixture<GrantPermissionsVkycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantPermissionsVkycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrantPermissionsVkycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
