import p5 from 'p5';
import CA from './ca';

let ca;

window.setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);

  // Number of neighbors on each side that can affect its future state
  const neighborReach = 2; // Set to 1 for original wolfram CA

  // Number of states each cell can have
  const possibleStates = 3; // Set to 2 for original wolfram CA

  // Total number of rules = (Possible outcome states) ^ (Possible current states) ^ (Number of cells affecting the outcome)
  const ruleNum = floor(random(pow(possibleStates, pow(possibleStates, (2 * neighborReach) + 1))));

  console.log(`Using rule ${ruleNum}`);

  // Create a CA with rule number and neighbor reach
  ca = new CA(ruleNum, possibleStates, neighborReach);
};

window.draw = () => {
  ca.render();
  ca.generate();
};
