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

// var gameJ1, gameJ2, gameJ3, gameM1,gameM2,gameM3,avgScoreJ,avgScoreM;
// gameJ1 = 100;
// gameJ2 = 120;
// gameJ3 = 102;
// gameM1 = 100;
// gameM2 = 120;
// gameM3 = 102;

// avgScoreJ = (gameJ1+gameJ2+gameJ3)/3;
// avgScoreM = (gameM1+gameM2+gameM3)/3;

// var winner;
// if(avgScoreJ === avgScoreM){
//     winner = null;
// }
// winner = avgScoreJ > avgScoreM? "John": "Mike";
// switch(winner){
//     case "John":
//         console.log("Winner team is of "+ winner+" with average score: "+ avgScoreJ);
//         break;
//     case "Mike":
//         console.log("Winner team is of "+ winner+" with average score: "+ avgScoreM);
//         break;
//     default:
//         console.log("It was a draw");
// }


//Challenge 3

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the 
bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// function tipCalculator(payAmnt){
//     var tip =0;
//     if(payAmnt<50){
//         tip = payAmnt*0.2;
//     }
//     else if(payAmnt>=50 && payAmnt<200){
//         tip = payAmnt*0.15;
//     }
//     else{
//         tip = payAmnt*0.1;
//     }
//     return tip;
// }

// var pays = [124,48,268];
// var tip = [tipCalculator(pays[0]),tipCalculator(pays[1]),tipCalculator(pays[2])];
// var finalAmount = [pays[0]+tip[0],pays[1]+tip[1],pays[2]+tip[2]];
// console.log(tip);
// console.log(finalAmount);


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
// var Mark = {
//     fullname: "Mark Smith",
//     mass: 78,
//     height: 1.69,
//     calculateBMI: function(){
//         this.BMI = this.mass/(this.height * this.height);
//         return this.BMI;
//     }
// };
// var John = {
//     fullname: "John Simpson",
//     mass: 92,
//     height: 1.95,
//     calculateBMI: function(){
//         this.BMI = this.mass/(this.height*this.height);
//         return this.BMI;
//     }
// };
// // console.log(John.BMI);


// if(Mark.calculateBMI()>John.calculateBMI()){
//     console.log(Mark.fullname+" has higher BMI with value: "+ Mark.BMI);
// }
// else if(John.BMI === Mark.BMI){
//     console.log(Mark.fullname+" and "+ John.fullname +" have same BMI with value: "+ Mark.BMI);
// }
// else{
//     console.log(John.fullname+" has higher BMI with value: "+ John.BMI);
// }



/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is 
more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in 
each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by 
the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

    
     var johnBill = {
                  value: [124,48,268,180,42] ,
                  tip: [],
                  amount: [],
                  tipCalculator: function(){
                      for(var i = 0; i<this.value.length ; i++){
                        if(this.value[i]<50){
                            this.tip[i] = this.value[i]*0.2;
                            this.amount[i] = this.tip[i] + this.value[i];
                        }
                        else if(this.value[i]>=100 && this.value[i]<300){
                            this.tip[i] = this.value[i]*0.15;
                            this.amount[i] = this.tip[i] + this.value[i];
                        }
                        else{
                            this.tip[i] = this.value[i]*0.1;
                            this.amount[i] = this.tip[i] + this.value[i];
                        }
                    }
                }
            };
        johnBill.tipCalculator();
        console.log(johnBill.tip,johnBill.amount);


        var markBill = {
            value: [77,375,110,45] ,
            tip: [],
            amount: [],
            tipCalculator: function(){
                for(var i = 0; i<this.value.length ; i++){
                  if(this.value[i]<100){
                      this.tip[i] = this.value[i]*0.2;
                      this.amount[i] = this.tip[i] + this.value[i];
                  }
                  else if(this.value[i]>=50 && this.value[i]<200){
                      this.tip[i] = this.value[i]*0.1;
                      this.amount[i] = this.tip[i] + this.value[i];
                  }
                  else{
                      this.tip[i] = this.value[i]*0.25;
                      this.amount[i] = this.tip[i] + this.value[i];
                  }
              }
          }
      };
      markBill.tipCalculator();
      console.log(markBill.tip,markBill.amount);

      var avgTip = function(tips){
          var sum = 0;
        for(var i = 0; i< tips.length; i++)
            sum = sum + tips[i];
      return sum/tips.length;
      }

    
    johnBill.averageTip = avgTip(johnBill.tip);
    markBill.averageTip = avgTip(markBill.tip);


      console.log("Averge tip for John "+ avgTip(johnBill.tip)+" , average tip for Mark is "+ avgTip(markBill.tip));
            
if(johnBill.averageTip>markBill.averageTip){
    console.log("Averge tip for John is highest : "+ avgTip(johnBill.tip));
}else if( johnBill.averageTip<markBill.averageTip){
    console.log("Averge tip for Mark is highest : "+ avgTip(markBill.tip));
}else{
    console.log("Averge tip for John and Mark is equal : "+ avgTip(johnBill.tip));
}