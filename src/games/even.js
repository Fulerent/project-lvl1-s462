import runCoreGame from '..';
import generitionNum from '../generic';

const rulesTheGame = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export const outputQuestion = () => {
  const numberQuastion = generitionNum(1, 99);
  const answer = isEven(numberQuastion);
  return { numberQuastion, answer };
};

export default () => runCoreGame(rulesTheGame, outputQuestion);
