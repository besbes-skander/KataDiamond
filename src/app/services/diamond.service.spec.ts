import {TestBed} from '@angular/core/testing';

import {DiamondService} from './diamond.service';

describe('DiamondService', () => {
  let service: DiamondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiamondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return A', () => {
    const letter = 'A';

    expect(service.displayDiamond(letter)).toEqual('A');
  });

  it('should return " A \nB B\n A " when given B', () => {
    const letter = 'B';

    expect(service.displayDiamond(letter)).toEqual(' A \nB B\n A ');
  });

  it('should return correct diamond for C', () => {
    const letter = 'C';

    expect(service.displayDiamond(letter)).toEqual('  A  \n B B \nC   C\n B B \n  A  ');
  });

  it('should return correct diamond for D', () => {
    const letter = 'D';

    expect(service.displayDiamond(letter)).toEqual('   A   \n  B B  \n C   C \nD     D\n C   C \n  B B  \n   A   ');
  });
});
