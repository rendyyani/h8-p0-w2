
// Tugas 1
 function shoutOut() {
     return ('Halo Function!');
    
 }
console.log(shoutOut());


// Tugas 2

function calculateMultiply (angka1, angka2) {
    return angka1 * angka2
}

var angka1 = 5;
var angka2 = 6;

console.log(calculateMultiply(angka1,angka2));


// Tugas 3


function fullSentence(name, age, address, hobby) {
    return (` Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}! `)
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var processSentence = fullSentence(name,age,address,hobby);
console.log(processSentence); 
