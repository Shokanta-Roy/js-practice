let str = "2345";
let num = parseFloat(str);
console.log(num); // 12345
let num2 = parseFloat("123.45");
console.log(num2); // 123.45
let num3 = parseFloat("123.45abc");
console.log(num3); // 123.45
let num4 = parseFloat("abc123.45");
console.log(num4); // NaN
let num5 = parseFloat("12.34");
console.log(num5); // 12.34