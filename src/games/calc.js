import runCoreGame from '..';
import generitionNum from '../generic';

const rulesTheGame = 'What is the result of the expression?';

const sing = ['+', '-', '*'];
const generationSing = sin => sin[generitionNum(0, sing.length - 1)];


const outputQuestion = () => {
  const oneNumber = generitionNum(1, 99);
  const twoNumber = generitionNum(1, 99);
  const singQuastion = generationSing(sing);
  const numberQuastion = `${oneNumber} ${singQuastion} ${twoNumber}`;
  let answer = '';
  switch (singQuastion) {
    case '+': answer += oneNumber + twoNumber; break;
    case '-': answer += oneNumber - twoNumber; break;
    case '*': answer += oneNumber * twoNumber; break;
    default:
  }
  return { numberQuastion, answer };
};

export default () => runCoreGame(rulesTheGame, outputQuestion);
