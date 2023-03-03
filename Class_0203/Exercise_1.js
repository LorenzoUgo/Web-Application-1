'use strict'

const scores = [20, 30, -5, -1, 100, -3, 50];
const NotNegScore =[];

let NN = 0;


for (const s of scores) { //ITERABLE -> Array -> for(... of ...)
    if (s > 0)
        NotNegScore.push(s);
}
/* Alternative solution without SORT function

NN = scores.length - NotNegScore.length; //num of neg number removed

let minScore = Math.min(...NotNegScore);
let index = NotNegScore.indexOf(minScore);
NotNegScore.splice(index, 1);  //Why not  NotNegScore.splice(0, 1, minScore);

minScore = Math.min(...NotNegScore);
index = NotNegScore.indexOf(minScore);
NotNegScore.splice(index, 1); */

/*Alternative solution with SORT function*/

NotNegScore.sort((a, b)=> a-b);
NotNegScore.shift();
NotNegScore.shift();

let avg = 0;
for(const s of NotNegScore){
    avg += s;
}
avg /= NotNegScore.length;

avg = Math.round(avg);

for(let i=0; i<NN+2; i++){
    NotNegScore.push(avg);
}

console.log(scores);
console.log(NotNegScore);

