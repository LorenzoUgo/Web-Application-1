'use strict';

const dayjs = require('dayjs');

function Answer(text, name, score=0, date){
    this.text = text;
    this.name = name;
    this.score = score;
    this.date = dayjs(date);

    this.toString = () => {
        return '${this.name}' replied '${this.text}'on '${this.date.format(YYYY-MM-DD)}'
                and got a score of ${this.score};
        }
}

function Question(text, name, date){
    this.text = text;
    this.name = name;
    this.date = dayjs(date);
    this.Answer = [];

    this.add = (Answer)=>{
        this.Answer.push(Answer);
    }

    this.findAll = (name) => {
        /*const foundAnwer = [];
        for(const a of this.Answer){
            if(a.name === name){
                this.foundAnwer.push(a);
            }
        }
        return foundAnwer;*/
        return this.Answer.filter(answer => answer.name === name); //return a new array containing the element that pass the filter function
    }
    this.afterDate = (date) => {
        return this.Answer.filter(ans => ans.date.isAfter(date));
    }
    this.listByDate = () =>{
        //have to create a new array BEFORE using sort, to be able to re-use the original in a second moment
        return [... this.Answer].sort((a,b) =>(a.date.isAfter(b.date)) ? 1 : -1 );  // if aDate >bDate istrue, return 1(->a); otherwise return -1(->b)
    }
    this.listByScore = () =>{
        //have to create a new array BEFORE using sort, to be able to re-use the original in a second moment
        return [... this.Answer].sort((a,b) =>(b.score - a.score) );  //already returning a positive/negative value with '-'
    }

    this.toString = () => {
    return Question '${this.text}' asked by '${this.name}'on '${this.date};
    }
}

const question = new Question('Is JavaScript better than Python?','Luigi De Russis','2023-02-02');

const firstAnswer= new Answer('Yes','Luca Manella', 5,'2023-02-15');
const secondAnswer = new Answer('Not in a million year', 'Guido Van Rossum', 8,'2023-03-02');
const thirdAnswer = new Answer('No', 'Lorenzo Ugoccioni', 2,'2023-03-02');

question.add(firstAnswer);
question.add(secondAnswer);
question.add(thirdAnswer);

console.log(question);
console.log(Answer.firstAnswer);

console.log(question.findAll('Luca Manella').toString());
console.log('\nList by date: ' + question.listByDate());
console.log(question.listByScore().toString);
console.log('List answer after a date:'+question.afterDate('2023-02-10'));
