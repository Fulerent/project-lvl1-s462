import runCoreGame from '..';

const generitionNum = (min, max) => Math.floor(1 + Math.random() * (max + min - min));
const rulesTheGame = 'What is the result of the expression?';

const sing = ['+', '-', '*'];
const generationSing = sin => sin[generitionNum(0, 2)];


const outputQuastion = () => {
  const oneNumber = generitionNum(1, 99);
  const twoNumber = generitionNum(1, 99);
  const singQuastion = generationSing(sing);
  const numberQuastion = `${oneNumber} ${singQuastion} ${twoNumber}`;
  let result = '';
  switch (singQuastion) {
    case '+': result += oneNumber + twoNumber; break;
    case '-': result += oneNumber - twoNumber; break;
    case '*': result += oneNumber * twoNumber; break;
    default:
  }
  return { numberQuastion, result };
};

export default () => runCoreGame(rulesTheGame, outputQuastion);
