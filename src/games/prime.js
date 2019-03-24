import runCoreGame from '..';
import generateNumber from '../generic';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) { return false; }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getData = () => {
  const question = generateNumber(1, 99);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => runCoreGame(descriptionGame, getData);
