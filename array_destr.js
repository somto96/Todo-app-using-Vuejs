/**
 * Author: Somto Ezerioha
 * 
 * This script does not influence the web app 
 */

// Destructuring of an array

/*This basically assigns elements in an object or array to a variable */

// for arrays
var thanksInThreeLangs = ['Thank you', 'Gracias', 'Arigatōgozaimashita'];
var [English, Spanish, Japanese] = thanksInThreeLangs;
console.log(English);
console.log(Spanish);
console.log(Japanese);

//For objects
const responses = {
    ENG: 'Thank you',
    SPA: 'Gracias',
    JAP: 'Arigatōgozaimashita'
}

const {ENG, SPA, JAP} = responses;
console.log(ENG);
console.log(SPA);
console.log(JAP);

/**
 * Please note that there are other examples concerning 
 * destructuring assigments in ES6.
 */