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

let movieKeys = Object.keys(movie);  //extract an array of object's keys
let movieKVpairs = Objeect.entries(movie); //extract an array of Key-value pairs from the object
let movieValues = Object.values(movie)  //extract an array of object's values

const ALIASmovie = movie;   //not copiyng the object itself, but only the reference
                            //ALIASmovie & movie will reference at the same object
console.log(ALIASmovie);

const COPYmovie = Object.assign({}, movie); //copying all the proprerty of movie object
                                            // in a fully (empty) new object
console.log(COPYmovie);

Object.assign(movie, {budget: '1 million USD'});    //I'm merging properties, also more than 1 property
                                                    //Adding a property (budget) to an existing object (movie)
console.log(movie);
console.log(ALIASmovie);

const UPDATENEWmovie = Object.assign({}, movie, {cast: 'Leonardo DiCaprio'}); //I'm merging properties
                                                                            //Adding a property (budget) to a new empty object ({}),
                                                                            //copied from an existing object (movie)
console.log(UPDATENEWmovie);

/*-> The assign(...) method can return a new object that can be assigned to a new variable
     If i need only to upgrade an existing object, the assignement is not needed;
     Conversely, it's usefull if I need a completely new object from scratch*/

const otherDUPLICATEDmovie = {... movie};   //spreading the movie properties to be assigned in the new object

console.log(otherDUPLICATEDmovie);

console.log('title' in movie);  //checking if the property it's in the object -> return a boolean
