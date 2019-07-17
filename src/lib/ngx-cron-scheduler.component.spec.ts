import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCronSchedulerComponent } from './ngx-cron-scheduler.component';

describe('NgxCronSchedulerComponent', () => {
  let component: NgxCronSchedulerComponent;
  let fixture: ComponentFixture<NgxCronSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCronSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCronSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
