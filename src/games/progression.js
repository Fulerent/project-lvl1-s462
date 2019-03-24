import runCoreGame from '..';
import generateNumber from '../generic';

const descriptionGame = 'What number is missing in the progression?';

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
  const lengthProgression = 10;
  const replaceIndex = generateNumber(1, lengthProgression - 1);
  const progression = generationProgression(firstNumber, step, lengthProgression);
  const answer = String(progression[replaceIndex]);
  progression[replaceIndex] = '..';
  const question = `${progression.join(' ')}`;
  return { question, answer };
};

export default () => runCoreGame(descriptionGame, getData);
