import runCoreGame from '..';
import generateNumber from '../generic';

const descriptionGame = 'What number is missing in the progression?';
const amountOfElements = 10;

const generationProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getData = () => {
  const firstNumber = generateNumber(1, 9);
  const step = generateNumber(1, 9);
  const indexReplace = generateNumber(1, amountOfElements - 1);
  const progression = generationProgression(firstNumber, step, amountOfElements);
  const answer = String(progression[indexReplace]);
  progression[indexReplace] = '..';
  const question = `${progression.join(' ')}`;
  return { question, answer };
};


export default () => runCoreGame(descriptionGame, getData);
