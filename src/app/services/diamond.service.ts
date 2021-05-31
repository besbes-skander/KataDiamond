import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiamondService {

  constructor() {
  }

  displayDiamond(letter: string): string {
  const size = letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

    if (letter === 'A') {
      return this.addSpaces(size, 'A') + 'A' + this.addSpaces(size, 'A');
    } else if (letter === 'B') {
      return this.addSpaces(size, 'A') + 'A' + this.addSpaces(size, 'A') + '\n'
        + this.addSpaces(size, 'B') + 'B B' + this.addSpaces(size, 'B') + '\n'
        + this.addSpaces(size, 'A') + 'A' + this.addSpaces(size, 'A')
    } else if (letter === 'C') {
      return this.addSpaces(size, 'A') + 'A' + this.addSpaces(size, 'A') + '\n'
        + this.addSpaces(size, 'B') + 'B B' + this.addSpaces(size, 'B') + '\n'
        + this.addSpaces(size, 'C') + 'C   C' + this.addSpaces(size, 'C') + '\n'
        + this.addSpaces(size, 'B') + 'B B' + this.addSpaces(size, 'B') + '\n'
        + this.addSpaces(size, 'A') + 'A' + this.addSpaces(size, 'A')
    } else {
      return letter;
    }
  }

  addSpaces(size: number, letter: string): string {
    const numSpaces = size - (letter.charCodeAt(0) - 'A'.charCodeAt(0)) - 1;
    let spaces = '';
    for (let i = 0; i < numSpaces; i++) {
      spaces += ' ';
    }
    return spaces;
  }
}
