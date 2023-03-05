'use strict'

//Creating a new object with property
const movie = {
    "title": 'Inception', //property name as string 
    genre: 'sci-fi',    //property name as a variable
    duration: 180
}

console.log(movie); //to print the full object

//console.log(movie[title]); //to access a precise property with [], a string is needed
            //->this will return an error, beacuse i'm using a variable called title (not defined yet)
            //->How to fix? 2 possible way:
console.log(movie["title"]);    //1° Correct way to access
let title='title';
console.log(movie[title]);  //2° Creating a variable with a value string
            //-> Be carefull to the value of the variable !!!

console.log(movie.genre);   //to access a property in fast way, only with variable

movie.director = 'Nolan';   //
// movie['director'] = 'Nolan';

delete movie.genre; //

for(const prop in movie){
    console.log(`${prop} is ${movie[prop]}`)
}