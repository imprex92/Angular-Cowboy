/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeverageListService } from './beverage-list.service';

describe('Service: BeverageList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeverageListService]
    });
  });

  it('should ...', inject([BeverageListService], (service: BeverageListService) => {
    expect(service).toBeTruthy();
  }));
});
