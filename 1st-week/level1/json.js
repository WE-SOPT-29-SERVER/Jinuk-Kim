const sopt = {
    name: "WE SOPT",
    slogan: "sopt",
    part: ["plan", "design", "android", "iOS", "server", "web"],
    number: 180,
    printName: function () {
        console.log("name:", this.name);
    },
};

console.log("typeof sopt :" + typeof sopt);

console.log("sopt: " + sopt);
console.log("sopt: ", sopt);
console.log("sopt: ", JSON.stringify(sopt));

sopt.printName();
sopt.number = 190;
sopt.printName();

const dogs = [
    { name: "식빵", family: "웰시코기", age: 1, weight: 2.14 },
    { name: "콩콩", family: "포메", age: 3, weight: 3.14 },
    { name: "맥시", family: "푸들", age: 5, weight: 5.14 },
];

console.log("dogs: " + dogs);
console.log("dogs: ", dogs);
console.log("dogs: ", JSON.stringify(dogs));

dogs.forEach(dog =>
    console.log(
        `${dog.name}은 종이 ${dog.family} 이고, 나이가 ${dog.age}입니다.`
    )
);