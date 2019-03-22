import runCoreGame from '..';

const rulesTheGame = 'Answer "yes" if number even otherwise answer "no".';
const generitioncNum = (min, max) => Math.floor(1 + Math.random() * (max + min - min));
export const outputQuastion = () => {
  const numberQuastion = generitioncNum(1, 99);
  const result = numberQuastion % 2 === 0 ? 'yes' : 'no';
  return { numberQuastion, result };
};

export default () => runCoreGame(rulesTheGame, outputQuastion);
