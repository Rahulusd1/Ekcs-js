// Take age input from the user and check if he is eligible for a driving liscence.
// Take name input from the user and check if his first character is a if it is a then say its a or else say its not a


// age = Number(prompt('Please enter here your age'));
// if(age < 18){
//     alert("You are not eligible for the Liscence")
// }else{
//     alert("You are eligible")
// }


var user = prompt("Please enter your Name"); //Here I am facing case senstivity prob
if(user[0] == "A"){ 
    alert("First letter of your name is A");
}else{
    alert("First letter of your name is not A")
}
