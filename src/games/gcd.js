import runCoreGame from '..';
import generitionNum from '../generic';

const rulesTheGame = 'Find the greatest common divisor of given numbers.';

const outputQuestion = () => {
  const oneNumber = generitionNum(1, 47);
  const twoNumber = generitionNum(47, 99);
  const numberQuastion = `${oneNumber} ${twoNumber}`;
  const smallestТumbers = oneNumber < twoNumber ? oneNumber : twoNumber;
  const isEval = (divisor) => {
    if (oneNumber % divisor === 0 && twoNumber % divisor === 0) return divisor;
    return isEval(divisor - 1);
  };
  const answer = String(isEval(smallestТumbers));

  return { numberQuastion, answer };
};

export default () => runCoreGame(rulesTheGame, outputQuestion);
