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

/* var johnH, markH, johnM, markM, bmiJ,bmiM,res;
johnH = prompt("Enter John's height in m");
johnM = prompt("Enter John's mass in kg");
markH = prompt("Enter Marks's height in m");
markM =  prompt("Enter Marks's mass in kg");
bmiJ = johnM/(johnH*johnH);
bmiM = markM/(markH*markH);
res = bmiM > bmiJ;
console.log("Is Mark's BMI greater than Jhon's ? "+ res);*/

//Challenge 2
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var gameJ1, gameJ2, gameJ3, gameM1,gameM2,gameM3,avgScoreJ,avgScoreM;
gameJ1 = 100;
gameJ2 = 120;
gameJ3 = 102;
gameM1 = 100;
gameM2 = 120;
gameM3 = 102;

avgScoreJ = (gameJ1+gameJ2+gameJ3)/3;
avgScoreM = (gameM1+gameM2+gameM3)/3;

var winner;
if(avgScoreJ === avgScoreM){
    winner = null;
}
winner = avgScoreJ > avgScoreM? "John": "Mike";
switch(winner){
    case "John":
        console.log("Winner team is of "+ winner+" with average score: "+ avgScoreJ);
        break;
    case "Mike":
        console.log("Winner team is of "+ winner+" with average score: "+ avgScoreM);
        break;
    default:
        console.log("It was a draw");
}
