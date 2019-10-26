

function konversiMenit(menit) {
    var round = Math.round;
    var sisa = menit % 60;
  
    var jam = menit / 60;
    var jam_integer = round(jam);
    
    

if (jam < 1) {
    return '0:' + menit;
} 
else if (sisa < 10) {
    return jam_integer + ':0' + sisa;
}
else {
    return jam_integer + ':' + sisa;
}
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120)); 