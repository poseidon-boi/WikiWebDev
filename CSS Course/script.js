"use strict";

const str = "abcdefghijklmnopqrstuvwxyz";
const randomChar = str.charAt(Math.floor(Math.random() * str.length));
console.log(randomChar);

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(arr.splice(2, arr.length - 1, 52, -7, 4, 14));
console.log(arr.splice(0, 0, 99));
console.log(arr);
arr.reverse();
console.log(arr);

const strArr = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
console.log(strArr.join(""));

const arr1 = [1, 2, 3], arr2 = [4, 5, 6];
console.log([arr1, arr2]);
console.log([...arr1, ...arr2]);

const firstObj = {one : 1};
console.log(firstObj);
console.log(firstObj.one);
console.log(firstObj["one"]);

const anotherObj = {
    foo: 5,
    bar: 10,
    bing: {
        bang: 10000,
        boom: 1000000
    },
    truth: "suffering",
    yeet: (thing) => {
        return thing+" has been yeeted";
    },
    speak: function() {
        return "Failure";
    },
    attempt: function() {
        return `Time for ${this.truth} and ${this.speak()}`;
    }
}
console.log(anotherObj.yeet);
console.log(anotherObj.yeet("ball"));
console.log(anotherObj.speak);
console.log(anotherObj.speak());
console.log(anotherObj.bing.bang);
console.log(arr.splice);
console.log(anotherObj.attempt());

delete anotherObj.attempt;
console.log(Object.keys(anotherObj));
console.log(Object.values(anotherObj));
for (let thing in anotherObj) {
    console.log(anotherObj[thing]);
}
const { foo: myFoo, bar: myBar} = anotherObj;
console.log(myFoo);
console.log(myBar);
function bar({ bar }) {
    return `bar is ${bar}`;
}
console.log(bar(anotherObj));

const sendJSON = JSON.stringify(anotherObj);
console.log(sendJSON);
console.log(typeof sendJSON);
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON.bing);

const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe";
    } catch (error) {
        console.log(error);
        console.warn(error);
        console.error(error);
        console.table(error);
    }
};
makeError();