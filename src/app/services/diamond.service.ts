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
    } else if (letter === 'B') {
      return this.addSpaces(1) + 'A' + this.addSpaces(1) + '\n'
        + this.addSpaces(0) + 'B B' + this.addSpaces(0) + '\n'
        + this.addSpaces(1) + 'A' + this.addSpaces(1)
    } else if (letter === 'C') {
      let result = '';
      let depth = this.getDepth('A');
      result += this.addSpaces(letterRank - depth - 1) + 'A' + this.addSpaces(letterRank - depth - 1) + '\n';

      depth = this.getDepth('B');
      result += this.addSpaces(letterRank - depth - 1) + 'B' + this.addSpaces(2 * depth - 1) + 'B' + this.addSpaces(letterRank - depth - 1) + '\n';

      depth = this.getDepth('C');
      result += this.addSpaces(letterRank - depth - 1) + 'C' + this.addSpaces(2 * depth - 1) + 'C' + this.addSpaces(letterRank - depth - 1) + '\n';

      depth = this.getDepth('B');
      result += this.addSpaces(letterRank - depth - 1) + 'B' + this.addSpaces(2 * depth - 1) + 'B' + this.addSpaces(letterRank - depth - 1) + '\n';

      depth = this.getDepth('A');
      result += this.addSpaces(letterRank - depth - 1) + 'A' + this.addSpaces(letterRank - depth - 1);

      return result;
    } else if (letter === 'D') {
      let result = '';
      let depth = this.getDepth('A');
      result += this.addSpaces(letterRank - depth - 1) + 'A' + this.addSpaces(letterRank - depth - 1) + '\n';

      depth = this.getDepth('B');
      result += this.addSpaces(letterRank - depth - 1) + 'B' + this.addSpaces(2 * depth - 1) + 'B' + this.addSpaces(letterRank - depth - 1) + '\n';

      depth = this.getDepth('C');
      result += this.addSpaces(letterRank - depth - 1) + 'C' + this.addSpaces(2 * depth - 1) + 'C' + this.addSpaces(letterRank - depth - 1) + '\n';

      depth = this.getDepth('D');
      result += this.addSpaces(letterRank - depth - 1) + 'D' + this.addSpaces(2 * depth - 1) + 'D' + this.addSpaces(letterRank - depth - 1) + '\n';

      depth = this.getDepth('C');
      result += this.addSpaces(letterRank - depth - 1) + 'C' + this.addSpaces(2 * depth - 1) + 'C' + this.addSpaces(letterRank - depth - 1) + '\n';

      depth = this.getDepth('B');
      result += this.addSpaces(letterRank - depth - 1) + 'B' + this.addSpaces(2 * depth - 1) + 'B' + this.addSpaces(letterRank - depth - 1) + '\n';

      depth = this.getDepth('A');
      result += this.addSpaces(letterRank - depth - 1) + 'A' + this.addSpaces(letterRank - depth - 1);

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

  getDepth(letter: string): number {
    return letter.charCodeAt(0) - 'A'.charCodeAt(0);
  }
}
