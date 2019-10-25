// Problem 1

//input variable
var word = 'Javascript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

// Output Javascript is awesome and I love it
console.log(word +' '+ second +' '+ third +' '+ fourth +' '+ fifth +' '+ sixth +' '+ seventh);

// Problem 2

var word = 'wow JavaScript is so cool';
var firstWord = word[0] + word [1] + word[2];
var secondWord = word[4] + word [5] + word [6] + word[7]
+ word[8]+ word[9]+ word[10]+ word[11]+ word[12]+ word[13]+ word[14];
var thirdWord = word[15]+ word[16] + word[17];
var fourthWord = word[18]+ word[19]+ word[20] ;
var fifthWord = word [21]+ word[22]+ word[23]+ word[24];

//Output

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// Problem 3

var word = 'wow JavaScript is so cool';
var firstWord = word.substr(0,3);
var secondWord = word.substr(4,10);
var thirdWord = word.substr(15,2);
var fourthWord = word.substr(18,2);
var fifthWord = word.substr(21,4);

//Output
console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


// Problem 4

var word = 'wow JavaScript is so cool';
var firstWord = word.substr(0,3);
var secondWord = word.substr(4,10);
var thirdWord = word.substr(15,2);
var fourthWord = word.substr(18,2);
var fifthWord = word.substr(21,4);

// new variabel

var firstWordLength = firstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;
var fourthWordLength = fourthWord.length;
var fifthWordLength = fifthWord.length;

//Output
console.log('First Word: ' + firstWord +', with length: '+ firstWordLength);
console.log('second Word: ' + secondWord +', with length: '+ secondWordLength);
console.log('Third Word: ' + thirdWord +', with length: '+ thirdWordLength);
console.log('Fourth Word: ' + fourthWord +', with length: '+ fourthWordLength);
console.log('Fifth Word: ' + fifthWord +', with length: '+ fifthWordLength);