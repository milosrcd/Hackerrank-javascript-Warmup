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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */


//solution
function staircase(n) {
    // Write your code here
    let x = '';
    let r = '';
    for (let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i >= j){
                x = '#'.repeat(i+1);
                let s = ' '.repeat(n-i-1);
                r = s.concat(x);
            }
        }
        console.log(r);                    
    }    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
