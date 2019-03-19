import readlinesync from 'readline-sync'; 

const name =  () => {
    const firstName = readlineSync.question('May I have your name? ');
    reuturn 'Hello, '  + firstName + '!';
}
export default name;