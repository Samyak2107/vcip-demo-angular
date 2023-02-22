import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDailyActivityComponent } from './agent-daily-activity.component';

describe('AgentDailyActivityComponent', () => {
  let component: AgentDailyActivityComponent;
  let fixture: ComponentFixture<AgentDailyActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentDailyActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentDailyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
