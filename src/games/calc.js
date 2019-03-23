import runCoreGame from '..';
import generitionNum from '../generic';

const rulesTheGame = 'What is the result of the expression?';

const sings = ['+', '-', '*'];

const processData = () => {
  const oneNumber = generitionNum(1, 99);
  const twoNumber = generitionNum(1, 99);
  const singQuestion = sings[generitionNum(0, sings.length - 1)];
  const numberQuestion = `${oneNumber} ${singQuestion} ${twoNumber}`;
  let answer = '';
  switch (singQuestion) {
    case '+': answer = oneNumber + twoNumber; break;
    case '-': answer = oneNumber - twoNumber; break;
    case '*': answer = oneNumber * twoNumber; break;
    default:
  }
  return { numberQuestion, answer };
};

export default () => runCoreGame(rulesTheGame, processData);
