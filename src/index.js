import readlineSync from 'readline-sync';

const inputName = () => {
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
};

export default inputName;
