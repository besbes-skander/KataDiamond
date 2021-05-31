import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiamondService {

  constructor() {
  }

  displayDiamond(letter: string): string {
    const letterRank = letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    if (letter === 'A') {
      return this.addSpaces(0) + 'A' + this.addSpaces(0);
    } else {
      let result = '';
      let depth = this.getDepth('A');
      result += this.addSpaces(letterRank - depth - 1) + 'A' + this.addSpaces(letterRank - depth - 1) + '\n';

      const diamondInnerSize = Math.floor(((letterRank * 2) - 3) / 2);
      for (let i = diamondInnerSize; i >= -diamondInnerSize; i--) {
        result += this.createLine(letterRank, i);
      }
      depth = this.getDepth('A');
      result += this.addSpaces(letterRank - depth - 1) + 'A' + this.addSpaces(letterRank - depth - 1);

      return result;
    }
  }

  addSpaces(numSpaces: number): string {
    let spaces = '';
    for (let i = 0; i < numSpaces; i++) {
      spaces += ' ';
    }
    return spaces;
  }

  getDepth(letter: string): number {
    return letter.charCodeAt(0) - 'A'.charCodeAt(0);
  }

  getCurrentLetter(letterRank: number, index: number): string {
    return String.fromCharCode('A'.charCodeAt(0) + (letterRank - Math.abs(index) - 1));
  }

  createLine(letterRank: number, i: number): string {
    const currentLetter = this.getCurrentLetter(letterRank, i);
    const depth = this.getDepth(currentLetter);
    return this.addSpaces(letterRank - depth - 1) + currentLetter + this.addSpaces(2 * depth - 1) + currentLetter + this.addSpaces(letterRank - depth - 1) + '\n';
  }
}
