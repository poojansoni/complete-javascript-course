// console.log("Hello World!!!");


// var firstName = "Poojan";
// var lastName = "Soni"; //string
// var age = 1000; //seems int but is floating point decimal
// var trueAge = false; //boolean
// var xyz; //undefined
// var check = null;


// //type coersion
// console.log(firstName + " "+ lastName + " is "+ age + " years old which is obviously "+ trueAge);

// alert(firstName + " "+ lastName + " is "+ age + " years old which is obviously "+ trueAge);

// var yourName = prompt("What is your name?");
// console.log("Your name is "+ yourName);

//compare john and marks bmi = mass (kg) / hieght^2 (m)

var johnH, markH, johnM, markM, bmiJ,bmiM,res;
johnH = prompt("Enter John's height in m");
johnM = prompt("Enter John's mass in kg");
markH = prompt("Enter Marks's height in m");
markM =  prompt("Enter Marks's mass in kg");
bmiJ = johnM/(johnH*johnH);
bmiM = markM/(markH*markH);
res = bmiM > bmiJ;
console.log("Is Mark's BMI greater than Jhon's ? "+ res);
