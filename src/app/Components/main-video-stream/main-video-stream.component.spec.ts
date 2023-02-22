import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVideoStreamComponent } from './main-video-stream.component';

describe('MainVideoStreamComponent', () => {
  let component: MainVideoStreamComponent;
  let fixture: ComponentFixture<MainVideoStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVideoStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainVideoStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
