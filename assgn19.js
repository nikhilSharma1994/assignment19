// Q.1

// const car = {
//     make:"Maruti Suzuki",
//     model:"Swift vxi",
//     year:2024

// }

// function carProperties(car) {
//     for (const key in car ){
//         console.log(`${key} : ${car[key]}`);
//     }
// }
// carProperties(car);


// Q.2
// const student = {
//     name:"Nikhil",
//     age:29,
//     grade:"B"
// } 

// function updategrade(newGrade){
//     student.grade = newGrade;
// }

// updategrade("A");
// console.log(student);


// Q.3
// function countProperties(Obj1){
//     return Object.keys(Obj1).length;
// }

// const Obj1 = {
//     name:"nikhil",
//     age:29,
//     email:"me.nikhil.sharma94@gmail.com",
//     course:"Full stack web Dev"
// }

// console.log(countProperties(Obj1));


// Q.4

// const Obj2 ={
//     name:"Nikhil",
//     age:29,
//     email:"me.nikhil.sharma94@gmail.com",
//     course:"full stack Web dev"
// } 

// console.log(Obj2.hasOwnProperty("name","age"));
// console.log(Obj2.hasOwnProperty("skills"));

// Q.5
// const r = 20;
// const area = Math.PI * Math.pow(r,2) ;
// console.log(area);

// Q.6
// function reverseString(input){
//     return input.split("").reverse("").join("")
// }

// const original = "Hey Its me";
// const reversedString = reverseString(original);
// console.log(reversedString);

// Q.7
const userMap = new Map();

function addUserName(name,age,email){
    const userInfo = {age,email};
    userMap.set(name,userInfo);
}

function updateUserName(name,age,email){
    if(userMap.has(name)){
    const userInfo = userMap.get(name);
    userInfo.age = age;
    userInfo.email=email;
}
}
function deleteUsername(name){
    userMap.delete(name);
}

addUserName("Nikhil",29,"me.nikhil.sharma942gmail.com");
addUserName("Sourav",26,"sourav@gamil.com");
console.log(userMap);

updateUserName("Manish",45,"manish@gmail.com")
console.log(userMap);

deleteUsername("Nikhil");
console.log(userMap);

    