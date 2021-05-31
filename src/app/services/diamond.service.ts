import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiamondService {

  constructor() {
  }

  displayDiamond(letter: string): string {
    if(letter === 'A')
    {
      return 'A';
    } else if (letter === 'B'){
      return ' A \nB B\n A '
    } else {
      return letter;
    }
  }
}
