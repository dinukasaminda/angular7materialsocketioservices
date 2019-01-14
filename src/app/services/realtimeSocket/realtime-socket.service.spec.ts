import { TestBed } from '@angular/core/testing';

import { RealtimeSocketService } from './realtime-socket.service';

describe('RealtimeSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealtimeSocketService = TestBed.get(RealtimeSocketService);
    expect(service).toBeTruthy();
  });
});
