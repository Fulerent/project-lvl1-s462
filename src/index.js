import readlineSync from 'readline-sync';

const runCoreGame = (rule, number, isResult) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  
  const gameToWin = 3;

  for (let i = 0; i < gameToWin; i += 1) {
    const numberIsQuestion = number(1, 99);
    console.log(`Question: ${numberIsQuestion}`);
    const userAnswer = readlineSync.question('Your answer? ');
    if (isResult(numberIsQuestion) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log("'no' is wrong answer ;(.");
      console.log(`Correct answer was 'yes'. Let's try again, ${userName}!'`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runCoreGame;
