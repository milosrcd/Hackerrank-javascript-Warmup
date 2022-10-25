'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

//solution
function plusMinus(arr) {
    // Write your code here
    let counterPositive = 0;
    let counterNegative = 0;
    let counterZero = 0;
    let sumP = 0;
    let sumN = 0;
    let sumZ = 0;
    let arrL = arr.length
    for(let i = 0; i < arrL; i ++){
        if(arr[i] > 0 ){
            counterPositive++;
        }else if(arr[i] < 0){
            counterNegative++;
        }else if(arr[i] == 0){
            counterZero++;
        }
        sumP = counterPositive/arrL;
        sumN = counterNegative/arrL;
        sumZ = counterZero/arrL;        
    }
    return console.log(sumP.toFixed(6) + '\n' + sumN.toFixed(6) + '\n' +sumZ.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
