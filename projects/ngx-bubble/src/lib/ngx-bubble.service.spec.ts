import { TestBed } from '@angular/core/testing';

import { NgxBubbleService } from './ngx-bubble.service';

describe('NgxBubbleService', () => {
  let service: NgxBubbleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBubbleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
