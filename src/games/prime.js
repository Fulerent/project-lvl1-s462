import runCoreGame from '..';
import generitionNum from '../generic';

const rulesTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (num) => {
  const divisor = num / 2;
  if (num % divisor === 0) return num;
  return isPrimeNumber(num - 1);
};

const processData = () => {
  const numberQuestion = generitionNum(1, 100);
  const answer = isPrimeNumber(numberQuestion) === 1 ? 'yes' : 'no';
  return { numberQuestion, answer };
};

export default () => runCoreGame(rulesTheGame, processData);
