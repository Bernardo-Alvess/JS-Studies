import chalk from 'chalk'
var mySqrt = function(x) {
    let odd = 1;
    let count = 0;
    while(x - odd >= 0){
        x -= odd;
        odd += 2;
        count++;
    }
    return count;
};

const testes = (func, array) =>{
    array.forEach(element => {
        let result = func(element);
        if(result == Math.trunc(Math.sqrt(element))){
            console.log(`${element} = ${result} | ${chalk.green('PASSED')}`)
        }else{
            console.log(`${element} = ${result} | ${chalk.red('NEGATIVE')} | ${chalk.magenta('EXPECTED')} = ${Math.trunc(Math.sqrt(element))}`)
        }
    });
}
const sqrts = [2, 4, 8, 3, 10, 9, 1, 144, 14]
testes(mySqrt, sqrts)