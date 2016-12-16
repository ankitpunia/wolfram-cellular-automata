import p5 from 'p5';

const N_aryArrayToNum = (array, n) => (
  parseInt(array.join(''), n)
);

const numToN_aryArray = (num, n, len) => (
  Array(len).join('0').concat(num.toString(n)).slice(-len).split('').map(item => Number(item))
);

export default class CA {
  constructor(ruleNum, possibleStates, neighborReach) {
    this.cells = new Array(256);
    this.generation = 0;
    this.cellSize = width / this.cells.length;
    this.possibleStates = possibleStates;
    this.neighborReach = neighborReach;

    for (let i = 0; i < this.cells.length; i += 1) {
      this.cells[i] = 0;
    }
    this.cells[128] = floor(random(1, this.possibleStates));

    // Converts the rule number to rule set array
    this.ruleSet = numToN_aryArray(ruleNum,
      this.possibleStates,
      pow(this.possibleStates, (2 * this.neighborReach) + 1));
  }

  generate() {
    const nextGen = [];
    for (let i = 0; i < this.cells.length; i += 1) {
      const neighborHood = [];
      for (let j = -this.neighborReach; j <= this.neighborReach; j += 1) {
        neighborHood.push((this.possibleStates - 1) -
          this.cells[((i + j) + this.cells.length) % this.cells.length]);
      }
      nextGen[i] = this.ruleSet[N_aryArrayToNum(neighborHood, this.possibleStates)];
    }

    this.cells = nextGen.slice();

    this.generation += 1;
  }

  render() {
    noStroke();
    for (let i = 0; i < this.cells.length; i += 1) {
      //      fill(255 - this.cells[i] * ((256 / (this.possibleStates - 1)) - 1));
      switch (this.cells[i]) {
        case 0:
          fill(255, 255, 255);
          break;
        case 1:
          fill('#00FFF7');
          break;
        case 2:
          fill('#0C83E8');
          break;
        case 3:
          fill('#0CE86E');
          break;
        case 4:
          fill('#0714FF');
          break;
        case 4:
          fill('#25FF0D');
          break;
        default:
          fill(0, 0, 0);

      }
      rect(i * this.cellSize, this.generation * this.cellSize, this.cellSize, this.cellSize);
    }
  }
}
