// NOTE this only brings in parts of a class import {  } from "module";

import Anteater from './Model/animalA.js';
import animalA from './Model/animalA.js';
import Bear from './Model/animalB.js';
import animalB from './Model/animalB.js';
import Cat from './Model/animalC.js';
import animalC from './Model/animalC.js'
import Dog from './Model/animalD.js'
import Elephant from './Model/animalE.js'
import Giraffe from './Model/animalG.js'
import Hippo from './Model/animalH.js'
import Iguana from './Model/animalI.js'

// let ally is creating an instance(instantiating) of the class Anteater.
let ally = new Anteater('Ally', 2, 'F')

let jace = new Bear('Jace', '4','Male','Brown')
// jace.eat('fish') is accessing an object by calling a method from that class. 
  jace.eat('fish')

let koda = new Cat('Koda', 'Maincoon', 'Multi-colored','Nice')
  koda.play('mouse');

let angel = new Dog('Angel', 'Short hair', 'Med')
  angel.speak('BOOORRRK!')

let trunks = new Elephant('Trunks', 'Africa', 'small')
    console.log(trunks)
let dunks = new Elephant('Dunks', 'Asia', 'large', true)
    console.log(dunks)
  dunks.swim('muddy water')

let lilG = new Giraffe('lil G', '7feet')
    console.log(lilG)

let penny = new Hippo('Penny', '800lbs')    
    penny.music('salsa')
  // NOTE This is creating a group of like items. You create the array with the instance of the class not the class itself.
let animals = []
 animals.push(angel, koda)
 console.log(animals)
 animals.push(jace)
 console.log(animals)

 animals.push()