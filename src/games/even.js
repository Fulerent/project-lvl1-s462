import runCoreGame from '..';

const rulesTheGame = 'Answer "yes" if number even otherwise answer "no".';
const genericNumberQuestion = (min, max) => Math.floor(1 + Math.random() * (max + min - min));
const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

export default () => runCoreGame(rulesTheGame, genericNumberQuestion, isEven);
