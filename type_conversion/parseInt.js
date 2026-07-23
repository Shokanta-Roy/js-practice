let str = "12345";
let num = parseInt(str);
console.log(num); // 12345
let str2 = "1";
let sum = num + str2;
console.log(sum); // 1234512.34
let sum2 = num + parseInt(str2);
console.log(sum2); // 12346
//parseInt("123abc"); // 123
console.log(parseInt("123a2bc")); // 123
console.log(parseInt("abc123")); // NaN
console.log(parseInt("12.34")); // 12 