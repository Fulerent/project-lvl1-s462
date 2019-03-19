
import * as readlineSync from 'readline-sync';
const name = () => {
    const firstName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${firstName}!`);
}

export default name;