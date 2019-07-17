import { TestBed, inject } from '@angular/core/testing';

import { NgxCronSchedulerService } from './ngx-cron-scheduler.service';

describe('NgxCronSchedulerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxCronSchedulerService]
    });
  });

  it('should be created', inject([NgxCronSchedulerService], (service: NgxCronSchedulerService) => {
    expect(service).toBeTruthy();
  }));
});
