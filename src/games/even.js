import runCoreGame from '..';
import generateNumber from '../generic';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

export const getData = () => {
  const question = generateNumber(1, 99);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => runCoreGame(descriptionGame, getData);
