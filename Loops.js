/* 

There are three types of loops in js

1. For Loop
2. While Loop
3. Do While Loop

*/

// // Below we are not following dry principle

// console.log("I will do my hw");
// console.log("I will do my hw");
// console.log("I will do my hw");
// console.log("I will do my hw");
// console.log("I will do my hw");
// console.log("I will do my hw");
// console.log("I will do my hw");
// console.log("I will do my hw");

// // Solution is loop

// // While Loop

// var write = 1;

// while(write <= 100){
//     console.log(write + " I will do my hw coming from while loop");
//     write++;
// }

// // For Loop

// for(var write = 1; write <= 100; write++){
//     console.log(write + " I will do my hw coming from for loop");
// }


// // Do While Loop

// var num = 8

// do{
//     console.log(num)
//     num++;
// }while(num < 10);



// Practice of Loops

// var name = 'Anoop Kumar';

// for(var i = 0; i < name.length; i++){
//     console.log(name[i])
// }


// console.log(name.split(" "))


// Replication of split function

var name = "Anoop Kumar Sudir Kumar"

var answer =  [];

var string = ""

for(var i = 0; i < name.length; i++){
    if(name[i] !== " "){
        string += name[i];
    }else{
        answer.push(string);
        string = ""
    }
}

answer.push(string)

console.log(answer);