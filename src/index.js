import readlineSync from 'readline-sync';

const gameToWin = 3;

const runCoreGame = (rule, outputQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  for (let i = 0; i < gameToWin; i += 1) {
    const { numberQuastion, answer } = outputQuestion();
    console.log(`Question: ${numberQuastion}`);
    const userAnswer = readlineSync.question('Your answer? ');
    if (answer === userAnswer) {
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
