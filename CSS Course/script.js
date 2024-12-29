let str = "abcdefghijklmnopqrstuvwxyz";
let randomChar = str.charAt(Math.floor(Math.random() * str.length));
console.log(randomChar);

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(arr.splice(2, arr.length - 1, 52, -7, 4, 14));
console.log(arr.splice(0, 0, 99));
console.log(arr);
arr.reverse();
console.log(arr);

let strArr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
console.log(strArr.join(""));

let arr1 = [1, 2, 3], arr2 = [4, 5, 6];
console.log([arr1, arr2]);
console.log([...arr1, ...arr2]);