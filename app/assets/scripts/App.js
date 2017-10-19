var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
    adultThing() {
        console.log("I love to do adult things.");
    }
}

var chris = new Person('Chris', 'Metroid');
var stephen = new Adult('Stephen', 'purple');

chris.greet();
stephen.greet();
stephen.adultThing();