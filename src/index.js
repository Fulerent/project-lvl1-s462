import readlineSync from 'readline-sync';

const gameToWin = 3;

const runCoreGame = (rule, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  for (let i = 0; i < gameToWin; i += 1) {
    const { question, answer } = getData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer? ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(.`);
      console.log(`Correct answer was ${answer}. Let's try again, ${userName}!'`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runCoreGame;
