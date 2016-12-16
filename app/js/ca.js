import p5 from 'p5';

const binaryArrayToNum = array => (
  parseInt(array.join(''), 2)
);

const numToBinaryArray8 = num => (
  '00000000'.concat(num.toString(2)).slice(-8).split('').map(item => Number(item))
);

export default class CA {
  constructor(ruleNum) {
    this.cells = new Array(256);
    this.generation = 0;
    this.cellSize = width / this.cells.length;

    for (let i = 0; i < this.cells.length; i += 1) {
      this.cells[i] = 0;
    }
    this.cells[128] = 1;

    // Converts the rule number to rule set array
    this.ruleSet = numToBinaryArray8(ruleNum);
  }

  generate() {
    const nextGen = [];
    for (let i = 0; i < this.cells.length; i += 1) {
      const leftIndex = [((i - 1) + this.cells.length) % this.cells.length];
      const rightIndex = [(i + 1) % this.cells.length];
      nextGen[i] = this.ruleSet[
        binaryArrayToNum(
          [1 - this.cells[leftIndex], 1 - this.cells[i], 1 - this.cells[rightIndex]])];
    }

    this.cells = nextGen.slice();

    this.generation += 1;
  }

  render() {
    noStroke();
    for (let i = 0; i < this.cells.length; i += 1) {
      fill(this.cells[i] === 1 ? 32 : 255);
      //   fill(this.cells[i] === 1 ? 0 : 255);
      rect(i * this.cellSize, this.generation * this.cellSize, this.cellSize, this.cellSize);
    }
  }
}
