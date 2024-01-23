// var z = 88;
// var z = 50;
// console.log(z)


// let bola = 33
// console.log(typeof bola)

// let Kola = "Hello "
// let Jumoke = "World"
// console.log (Kola+Jumoke)

// let i = "Quadri"
// console.log(`welcome home ${i}`)

// let s = " School"
// console.log("Welcome back to"+ s)


// //Stringmethods

// let hobby = "\t I love playing volley ball, \nin the snow"
// console.log(hobby.toUpperCase())
// console.log(hobby.toLowerCase())
// console.log(hobby.length)
// console.log(`her's`)

// let a = 10
// let b = 20
// let c = 30
// let d = 40
// let e = a+b+c+d
// let g = e/4
// console.log(g);

// let m = Math.pow (3,4)
// console.log(m)

// const A = 100;
// const B = Math.random();
// const C = A * B
// //console.log(c)
// console.log(`Random: ${B}`)
// console.log(`Result: ${C}`)

// // const result = Math.floor(C);
// // console.log(result);

// const classPI = Math.PI;
// // const pie = Math.floor(classPI);``
// // console.log(pie);

// const q = 10;
// const p = Math.random();
// const r = q * p;
// const S = r+1
// console.log(Math.floor(S))

// // const a = Math.floor(Math.random()*10)+11


// // Arrays and Object

// let boybands = {
//      Name : "Psquare", 
//      goe : ["Backstreet", "jui"],
//      Single : ["Donjazzy", "Dbanj"],
//      value : 4,
//      Wing : true,
//  }

// console.log(boybands);


// let evennumbers = [2,4,6,8,10]
// evennumbers.forEach((val)=>{console.log(val*2)})


// let even = [12,13,14,16,18,20];
// let evenn = even.map((val)=>(val*2))
// console.log(evenn)

// let prices = [10,20,30,40,50,60]
// let lastIndex = prices.length - 1
// let popped = prices[lastIndex]
// let strP = prices.toString()
// console.log(strP.replaceAll(",", "-"))
// console.log(popped)
// console.log(strP)


// let fruits = ["banana", "mango", "coconut", "grape", "orange"]
// let upperfr = []
// fruits.forEach((fr)=> upperfr.push(fr.toLocaleUpperCase()))
// console.log(upperfr);

// let onlya = fruits.filter((fil)=> fil.endsWith("e"));
// console.log(onlya);

// let onlye = fruits.filter((fi)=> fi.includes("a"))
// console.log(onlye)

// console.log(fruits.reverse())

// let yokao = {
//     hairColor: "black",
//     eyeColor: "black",
//     noseSize: "Large",
// }

// document.getElementById("text")

// let aq = window.prompt("Enter a name: ")

// function abc() {
//     console.log(`Happy Birthday ${aq}`);
// }
// abc()

// // // function product(ld,md) {
// // //     const mult = ld * md;
// // //     let  = ld;
// // //     let bz = md;
// // //     let zz = ld - md;
// // //     return mult;
// // // }

// // const result = product(5,4);
// // console.log(result);

// // ES 6
// const division = (ba, bc) => {
//     return  ba / bc;
// };


// let add = function(a,b) {
//     let c = Number(a);
//     return (c + b);
// }
// console.log(add("9", 67));

// const result = (a,b,c,d) => {
//     let f = Math.sqrt(d)
//     let e = a / b + c * f
//     return e
// }; 
// console.log(result(33,11,28,49));

// // Javascript flows and statement(Loops and Condition)


// let A = 90;
// let B = 80;
// let C = 70;
// let D = 50;
// let E = 30;
// let F = 20;
// let score = 89
// let limit = 100

// if(score > A <= limit){
//     console.log("Excellent");
// } else if(score < B >= A){
//     console.log("Credit")
// }
// else {
//     console.log("Failure")
// }

// let naira = [10,20,30,40];
// for (let i = 0; i < naira.length; i++){
//     let dollar = 1200*naira[i];
//     if (naira[i]>20) break;
//     console.log(dollar);
// }

const Ikorodu = [50, 60, 70, 30, 90, 250]

const Kosofe = [90, 30, 70, 50, 250, 60]
for (let a = 0; a < Ikorodu.length; a++){
    const element = Ikorodu[a];

    for (let b = 0; b < Kosofe.length; b++){
        if (element == Kosofe[b]){
            console.log(b);
            break;
        }
    }
}

// let names = ["Jola", "Tola", "Ronami"]
// for (let p = 0; p < names.length; i++){
//     // console.log(names[p])
// }
// // OR
// for(let name of names){
//     console.log(name);
// }

const dog = {
    legs: 4,
    breed: ["German Sheperd", "Eskimo", "Pitbull"],
    speech: "bark",
    habitat:"terrestial"
}
for (const key in dog) {
    console.log(key)
}
for (const key of Object.entries(dog)){
    console.log(key)
}

// Tenary operator ? :
let a = true
if(a == ""){
    console.log("You are doing well");
} else{
    console.log("Nope")
}

let res = (a == true)
    ? console.log("You are doing well")
    : console.log("Nope");
console.log(res);

// 
function tellTime(time){
    let timee = Number.parseInt(time.slice(0, -3))
    let result = (timee < 12) ? "Good Morning":
                (timee >= 12 && timee < 16) ? "Good Afternoon":
                (timee >= 16 && timee <= 24) ? "Good evening": "enter right time"
    return result
}

console.log(tellTime("10:00"));

let x = window.prompt("Enter a value: ")
x = Number(x)
let color = x < 20 ? "Blue" : "Black"
console.log(color);

switch (color) {
    case "Blue":
        console.log("You have a blue color");
        break;
    case "Black":
        console.log("You have the color black");
        break;
    default:
        console.log("No color")
        break;
}




