var userName = prompt('Hello, friend! What is your name?');
alert('Greetings, ' + userName + '. My name is Zach. I\'ll ask you a few      questions about me to break the ice.');
console.log('User\'s name is ' + userName + '.');

var answerOne = confirm('First question,' + userName + '! I\'m from Bellevue. Click OK if you think it\'s true, Cancel if false..');
if (answerOne === false) {
  console.log(userName + ' got the first question right!');
  alert('That\'s right, ' + userName + '! I was born in Redmond');
}
else {
  alert('Nope, ' + userName + '. That\'s not where I\'m from.');
  console.log(userName + ' got the first question wrong');
};

var answerTwo = confirm('Next question,' + userName + '! Did I go to college in Walla Walla? Again, click OK if you think it\'s true, Cancel if false..');
if (answerTwo === true) {
  console.log(userName + ' got the second question right!');
  alert('That\'s right, ' + userName + '! I went to school over there at Whitman College. Lots of wheat fields. Lots of socially conservative billboards.');
}
else {
  console.log(userName + ' got the second question wrong.');
  alert('Nope, ' + userName + '. I did.');
};

var answerThree = confirm('Next question,' + userName + '! Is my cat\'s name Sophocles? Again, click OK if you think it\'s true, Cancel if false..');
if (answerThree === false) {
  console.log(userName + ' got the third question right!');
  alert('That\'s right, ' + userName + '! His name is Archimedes. The educated cat.');
}
else {
  console.log(userName + ' got the third question wrong.');
  alert('Nope, ' + userName + '. That\'s not his name. Wise choice on my part. He\'s not a deeply moral creature');
};

var answerFour = prompt('Final question, ' + userName +'. How old am I? Please answer with a numeral.');
console.log(userName + ' guessed my age was ' + answerFour + '.');
if (answerFour == 27) {
  alert('That\'s right, ' + userName + '! I\'m 27 years old.');
}
else if (answerFour < 27) {
  alert('Too low, ' + userName + '! But flattering.');
}
else if (answerFour > 27) {
  alert('Too high, ' + userName + '. Is it the beard?');
}
else {
  alert(userName + '! You were supposed to answer with a numeral.')
};