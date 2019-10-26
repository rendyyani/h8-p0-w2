function xo(str) {
    //var a = str.length;
    var X = str.split("x").length, O = str.split("o").length;
  
    
    if (X == O) {
        return true
    } else {
        return false
    }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true