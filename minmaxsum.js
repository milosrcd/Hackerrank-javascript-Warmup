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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

//solution
function miniMaxSum(arr) {
    // Write your code here
    let arrSort = arr.sort();
    let min = 0;
    let max = 0;
    
    for(let i = 0; i < arrSort.length - 1; i++){
        min += arrSort[i];
    }
    for(let i = 1; i < arrSort.length; i++){
        max += arrSort[i];
    }
    
    console.log(min + ' ' + max);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
