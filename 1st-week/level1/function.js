// function add(x, y){
//     return x + y;
// }
// console.log(add(2,3));

const addStr = function (x,y){
    return x+y;
};
console.log(addStr("안녕", "하세요"));

const add_func = (x, y) => {
    return x + y;
};

// console.log(add_func(1, 2));

// const add_func = x => {
//     return x;
// }

const add = (x, y) => x + y;

const square = x => x * x;

const person = (name, age) => ({name: name, age: age});

const person_info = function (name, age){
    return {
        name: name,
        age: age,
    };
};

console.log(person("이름", "나이"));
console.log(person_info("이름", "나이"));