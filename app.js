'use strict'

var whatsYourName;
var isMyName;
var didIJustMove;
var howManyDogs;
var whatWasMyJob;
var myFavPlace;
var goodBye;


var whatsYourName = prompt('What\'s your name?')


isMyName = prompt('Hi ' +whatsYourName+ '! Is my name Melissa?').toLowerCase();
if (isMyName === 'yes') {
// console.log(isMyName + ' my name is Melissa')
 alert('Yup!  That\'s my name.')
} else {
 // console.log('Actually, you\'re wrong, my name is Melissa. ')
  alert('Actually, you\'re wrong.  My name is Melissa')
};

didIJustMove = prompt('Did I just move from NC?').toLowerCase();
if (didIJustMove === 'yes') {
 // console.log('You\'re correct!  I just moved from NC')
  alert('You\'re correct!  I just moved from NC')
} else {
//  console.log('I did just move from NC')
  alert('I did just move from NC')
};

howManyDogs = prompt('Do I have 2 dogs?').toLowerCase();
if (howManyDogs === 'no') {
  //console.log('Good job! I have 3 dogs.')
  alert('Good job! I have 3 dogs.')
} else {
 // console.log('Close! I have 3 dogs.')
  alert('Close!  I have 3 dogs.')
};

whatWasMyJob = prompt('Was my last job as a paralegal?').toLowerCase();
if (whatWasMyJob === 'yes') {
 // console.log('I was a paralegal.  So exciting....')
  alert('I was a paralegal.  So exciting...')
} else {
 // console.log('Incorrect.  I was a paralegal.  So exciting...')
  alert('Incorrect.  I was a paralegal.  So exciting...')
};

myFavPlace = prompt('Is my favorite place to be in nature?').toLowerCase();
if (myFavPlace === 'yes') {
  //console.log('Correct!  My favorite place to be is in nature.')
  alert('Correct!  My favorite place to be is in nature')
} else {
  //console.log('My favorite place to be is definitely in nature')
  alert('My favorite place to be is definitely in nature')
};

goodBye = alert('Bye ' + whatsYourName + '!');
