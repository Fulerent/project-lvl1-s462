import runCoreGame from '..';
import generateNumber from '../generic';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getDivisor = (num1, num2) => {
  if (num1 % num2 === 0) return String(num2);
  return getDivisor(num2, num1 % num2);
};

const getData = () => {
  const firstNumber = generateNumber(1, 47);
  const secondNumber = generateNumber(47, 99);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getDivisor(firstNumber, secondNumber);
  return { question, answer };
};

export default () => runCoreGame(descriptionGame, getData);
