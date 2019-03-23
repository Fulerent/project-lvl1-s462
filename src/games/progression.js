import runCoreGame from '..';
import generitionNum from '../generic';

const rulesTheGame = 'What number is missing in the progression?';
const amountOfElements = 10;
const replaceItemNum = generitionNum(1, 9);
const elemntReplace = ' ..';

const generationSequence = (firstNumber, step) => {
  const iter = (number, count, acc) => {
    if (amountOfElements <= count) return acc;
    if (count === replaceItemNum) {
      return iter(number + step, count + 1, acc + elemntReplace);
    }
    return iter(number + step, count + 1, `${acc} ${number}`);
  };
  return iter(firstNumber, 0, ' ');
};
const searchRigthAnswer = (sequence, step) => {
  const sequenceArray = sequence.split(' ');
  for (let i = 0; i < sequence.length; i += 1) {
    if (sequenceArray[i] === '..') {
      return Number(sequenceArray[i - 1] + step);
    }
  }
  return 0; // не знаю, что вернуть в f(), чтобы линтер не выдовал ошибку об отсутствие return
};
const processData = () => {
  const firstNumber = generitionNum(1, 9);
  const step = generitionNum(1, 9);
  const numberQuestion = `${generationSequence(firstNumber, step)} `;
  const answer = String(searchRigthAnswer(numberQuestion, step));
  return { numberQuestion, answer };
};


export default () => runCoreGame(rulesTheGame, processData);
