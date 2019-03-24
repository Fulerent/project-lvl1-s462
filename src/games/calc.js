import runCoreGame from '..';
import generateNumber from '../generic';

const descriptionGame = 'What is the result of the expression?';

const sings = ['+', '-', '*'];

const getResult = (sing, num1, num2) => {
  switch (sing) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default:
  }
  return 'Ошибка знака';
};

const getData = () => {
  const firstNumber = generateNumber(1, 99);
  const secondNumber = generateNumber(1, 99);
  const sing = sings[generateNumber(0, sings.length - 1)];
  const question = `${firstNumber} ${sing} ${secondNumber}`;
  const answer = String(getResult(sing, firstNumber, secondNumber));
  return { question, answer };
};

export default () => runCoreGame(descriptionGame, getData);
