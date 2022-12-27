/* Exercise 1: Your Favorite Food*/

let nourriture = "Alloco";
let repas = "Diner";

console.log(" je mange " + nourriture + " à chaque " + repas);



/* Exercise 2 : Series */

//Partie 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// 1.
const myWatchedSeriesLength = 3 ;


//2.

let myWatchedSeriesSentence = myWatchedSeries[0] + " ," + myWatchedSeries[1] +" ,"+myWatchedSeries[2]
 
//3.

console.log(" I watched "+ myWatchedSeriesLength +" series : "+ " "+myWatchedSeriesSentence )

//partie 2

//1.
myWatchedSeries.splice(2,1,"frends");


//2.
myWatchedSeries.push("Dragon");


//3.


myWatchedSeries.unshift("prison breack");


//4.
myWatchedSeries.splice(1,1);


//5.
console.log(myWatchedSeries[2][3]);

//6.

console.log(myWatchedSeries);


/* Exercise 3 : The Temperature Converter */


//1.


let tem_cel = "20 °C";

//2.

let tem_fa = "60 °F"

console.log(tem_cel +" équivaut à " + tem_fa);





/* Exercise 4 : Guess The Answers #1 */

let c;
let a = 34;
let b = 21;

    // 1) 55


  // 2)  23

  // 3) indefini

  //4) 75
 


/* Exercise 5 : Guess The Answers #2 */

        typeof(15)
        // Prediction:numeric
        // Actual:numeric

        typeof(5.5)
        // Prediction:numeric
        // Actual:numeric float 

        typeof(NaN)
        // Prediction:0
        // Actual:indefine

        typeof("hello")
        // Prediction: hello
        // Actual:string 

        typeof(true)
        // Prediction:true
        // Actual:booléen

        typeof(1 != 2)
        // Prediction:true
        // Actual:booléen

        "hamburger" + "s"
        // Prediction:string 
        // Actual:hamburgers

        "hamburgers" - "s"
        // Prediction:- not exist for concatenation
        // Actual:error

        "1" + "3"
        // Prediction:string
        // Actual:13

        "1" - "3"
        // Prediction:"- "not exist for concatenation
        // Actual:error

        "johnny" + 5
        // Prediction:string and value
        // Actual:johnny5

            "johnny" - 5
            // Prediction:"- "not exist for concatenation
            // Actual:

        99 * "hello"
            // Prediction:number and string
            // Actual:99hello

        1 != 1
            // Prediction:false
            // Actual:booleen

        1 == "1"
            // Prediction:number and string
            // Actual:11

        1 === "1"
            // Prediction:number and string
            // Actual:false




/* EXERCICE 6 : Guess The Answers #3*/
        5 + "34"
            // Prediction:5 is number and "34" is string
            // Actual:534

        5 - "4"
            // Prediction: "-" can't concatenate string and number
            // Actual:error

        10 % 5
            // Prediction:modulo 10 per 5 (10/5)
            // Actual:2

        5 % 10
            // Prediction:modulo 5 per 10 (5/10)
            // Actual:0

            "Java" + "Script"
            // Prediction:"Java" is string  and "Script" is also string
            // Actual:JavaScript

        " " + " "
        // Prediction:space because we are two spaces 
        // Actual:space (____________)

        " " + 0
        // Prediction:string and number
        // Actual:0

        true + true
            // Prediction: true is booleen
            // Actual:Booleen 

        true + false
            // Prediction:false and true are booleen 
            // Actual:false 

        false + true
            // Prediction:false and true are booleen 
            // Actual:false

        false - true
            // Prediction:" -" is not the ideal operator
            // Actual:error

            !true
            // Prediction:booleen 
            // Actual:true

        3 - 4
            // Prediction:3 and 4 are numbers 
            // Actual:-1

            "Bob" - "bill"
            // Prediction:"-" can't concatenate two string 
            // Actual:error
