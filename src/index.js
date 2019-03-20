import readlineSync from 'readline-sync';
/* Спаршиваем имя */
const inputName = () => {
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
  return firstName;
};
/* Генирируем случайное число */
const generationNumber = (min = 1, max = 99) => Math.floor(1 + Math.random() * (max + min - min));
/* Выводим это число */
const printQuestion = (number) => {
  console.log(`Question: ${number}`);
  return number;
};
/* Проверка правильности ответа */
const isResult = (ask, answer) => {
  if (answer === 'no' && ask % 2 !== 0 || answer === 'yes' && ask % 2 === 0) return true;
  return false; // не знаю, как в одну строку проверить ответ пользователя
};
/* Основная функция */
const gameOfBrains = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = inputName();
  for (let i = 0; i < 3; i += 1) {
    const numberIsQuestion = printQuestion(generationNumber(1, 99));
    const userAnswer = readlineSync.question('Your answer? ');
    if (isResult(numberIsQuestion, userAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(`'no' is wrong answer ;(.\nCorrect answer was 'yes'. Let's try again, ${name}!'`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameOfBrains;
