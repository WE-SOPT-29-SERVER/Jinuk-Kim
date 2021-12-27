let arr1 = [];
console.log(arr1);
console.log(typeof arr1);

let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(typeof arr2);

let arr3 = ["김진욱", 1, 2, 3, null, { name: "Jinuk", age: 25 }];
console.log(arr3);
console.log(typeof arr3);

let arr = [1, 2, 3, 4];
console.log(`arr의 길이: ${arr.length}`);
arr.push("new item");
console.log("arr push:", arr);
arr.pop();
console.log("arr pop:", arr);

arr.unshift("first item");
console.log("arr unshift:", arr);
arr.shift();
console.log("arr shift:", arr);

console.log("arr.includes(4):", arr.includes(4));
console.log("arr.includes(1000):", arr.includes(1000));

console.log("arr.indexOf(4):", arr.indexOf(4));
console.log("arr.indexOf(1000):", arr.indexOf(1000));

arr1 = [1,2,3];
arr2 = [4,5,6];
let concatArr = arr1.concat(arr2);
console.log(concatArr);

let location = ["서울", "대전", "대구", "부산"];
console.log(location.join("->"));
console.log(location.reverse().join("->"));

let countries = ["Korea", "Japan", "China"];
console.log(countries.sort((a, b) => (a > b ? 1 : -1))); // 알파벳 OK, 유니코드 문자 정렬 잘 안되는 경우 있음
console.log(
    countries.sort(function (a, b){
        return a.localeCompare(b);
    })
);
console.log(
    "오름차순 정렬 ",
    concatArr.sort((a, b) => a - b)
);
console.log(
    "내림차순 정렬 ",
    concatArr.sort(function (a, b) {
        return b - a;
    })
);

let number = [100, 234, -123, 1, 23, -637, -125, 99, 2, 3, 4, 5];
let minusNum = number.filter(item => item < 0);
console.log("minusNum: ", minusNum);

let countriesLengths = countries.map(item => item.length);
console.log("countriesLengths: ", countriesLengths);

let num = [1,2,3,4,5,6,7,8,9,10];
let sum = num.reduce((previousValue, currentValue) => {
    console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`);
    return previousValue + currentValue;
});
console.log(sum);

let server = ["강한희", "고성용", "구건모", "권세훈", "김영권", "김은지", "김진욱"];
let serverIndexStr = "번호! ";
let serverNameStr = "이름! ";

for(let item in server){
    serverIndexStr += item + "! ";
}
console.log(serverIndexStr);

for (let item of server){
    serverNameStr += item + "! ";
}
console.log(serverNameStr);

server.forEach(item => {
    console.log(item);
});
