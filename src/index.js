import readlineSync from 'readline-sync';
/* Спаршиваем имя */
const inputName = () => {
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
  return firstName;
};
/* Генирируем случайное число от 1 до 99 */
const generationNumber = () => Math.floor(1 + Math.random() * (99 + 1 - 1));
/* Выводим это число */
const askQuestion = (number) => {
  console.log(`Question: ${number}`);
  return number;
};
/* Спрашиваем и сохраняем ответ */
const askAnswer = () => readlineSync.question('Your answer? ');
/* Проверка правильности ответа */
// eslint-disable-next-line consistent-return
const checkAnswer = (ask, answer) => {
  if (answer === 'yes' && ask % 2 !== 0) return false;
  if (answer === 'no' && ask % 2 === 0) return false;
  if (answer === 'no' && ask % 2 !== 0) return true;
  if (answer === 'yes' && ask % 2 === 0) return true;
};
/* Основная функция */
const gameOfBrains = () => {
  const name = inputName();
  let i = 0;
  for (i; i < 3;) {
    const ask = askQuestion(generationNumber());
    const answer = askAnswer();
    if (checkAnswer(ask, answer, name)) {
      console.log('Correct!');
      i += 1; // инкрементация происходит здесь, т.к. в другом случаи, мы просто выходим
    } else {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!'`);
    }
  }

  if (i === 3) return console.log(`Congratulations, ${name}!`); // проверка на кол-во ответов
  return false;
};

export default gameOfBrains;
