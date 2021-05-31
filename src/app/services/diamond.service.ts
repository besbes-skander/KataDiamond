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
      return this.addSpaces(0) + 'A' + this.addSpaces(0);
    } else if (letter === 'B') {
      return this.addSpaces(1) + 'A' + this.addSpaces(1) + '\n'
        + this.addSpaces(0) + 'B B' + this.addSpaces(0) + '\n'
        + this.addSpaces(1) + 'A' + this.addSpaces(1)
    } else if (letter === 'C') {
      let result = '';
      let depth = ('A'.charCodeAt(0) - 'A'.charCodeAt(0));
      result +=  this.addSpaces(size - depth - 1) + 'A' + this.addSpaces(size - depth - 1) + '\n';
      depth = ('B'.charCodeAt(0) - 'A'.charCodeAt(0));
      result +=  this.addSpaces(size - depth - 1) + 'B B' + this.addSpaces(size - depth - 1) + '\n';
      depth = ('C'.charCodeAt(0) - 'A'.charCodeAt(0));
      result +=  this.addSpaces(size - depth - 1) + 'C   C' + this.addSpaces(size - depth - 1) + '\n';
      depth = ('B'.charCodeAt(0) - 'A'.charCodeAt(0));
      result +=  this.addSpaces(size - depth - 1) + 'B B' + this.addSpaces(size - depth - 1) + '\n';
      depth = ('A'.charCodeAt(0) - 'A'.charCodeAt(0));
      result +=  this.addSpaces(size - depth - 1) + 'A' + this.addSpaces(size - depth - 1);
      return result;
    } else {
      return letter;
    }
  }

  addSpaces(numSpaces: number): string {
    let spaces = '';
    for (let i = 0; i < numSpaces; i++) {
      spaces += ' ';
    }
    return spaces;
  }
}
