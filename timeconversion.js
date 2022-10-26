'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

//solution
function timeConversion(s) {
    // Write your code here
    let subS = '';
    let subA = s.slice(0,2);
    let subB = s.slice(2);
    if(s.includes("AM")){
        if(s.startsWith("12")){
            subA = '00';
            subS = subA.concat(subB).substr(0, s.length-2);
            return subS;
        }
        subS = s.substr(0, s.length-2);
        return subS;
    }else{
        if(s.startsWith("12")){
            subA = '12';
            subS = subA.concat(subB).substr(0, s.length-2);
            return subS;
        }
        let subX = Number(subA) + 12;
        let subFinal = subX.toString();
        subS = subFinal.concat(subB).substr(0, s.length-2);
        return subS;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
