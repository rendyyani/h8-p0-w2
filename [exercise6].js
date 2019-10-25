// Problem 1
var maju = 0;
var tambah = 2;
console.log('LOOPING PERTAMA')
while (maju < 20) {
    maju += tambah;
 
    console.log(maju + '- I love coding'); 
    
} 

var mundur = 22;
var kurang = 2;
console.log('LOOPING KEDUA')
while (mundur > 2) {
    mundur -= kurang;
    console.log(mundur + '- I will become  full stack developer')
}

// Problem 2

console.log('LOOPING PERTAMA')

for (var angka = 1; angka < 21; angka++) {
    console.log(angka +' - I love coding')
}


console.log('LOOPING KEDUA')

for (var number = 20; number > 0; number--) {
    console.log( number + ' - I will become fullstack developer')
}

// Problem 3

// part II

for (counter = 1; counter <= 100 ; counter++) {
    if (counter % 2 ==0 ) {
      console.log('GENAP');
    }
 else {console.log('GANJIL')}
 
}

// looping 2

console.log('LOOPING PENGULANGAN 2')

for(var counter = 1; counter < 102; counter ++) {
    if (counter%2 == 0) {
        console.log(counter + " kelipatan 2");
    }
    else {
        console.log(counter)
    }
}

// looping 5

console.log('LOOPING PENGULANGAN 5')

for(var counter = 1; counter < 102; counter ++) {
    if (counter%5 == 0) {
        console.log(counter + " kelipatan 5");
    }
    else {
        console.log(counter)
    }
}

// looping 9

console.log('LOOPING PENGULANGAN 9')

for(var counter = 1; counter < 102; counter ++) {
    if (counter%9 == 0) {
        console.log(counter + " kelipatan 9");
    }
    else {
        console.log(counter)
    }
}

