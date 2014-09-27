//alert("Lab 10 - JavaScript works! - 25 September 2014");


// Kelly L. Fret
// SDI 1409
// Lab 10
// 25 September 2014


// Global variables
var sndNumber = 1000;
var num1 = 3;
var num2 = 5;
var multResult;
// var intFive = 59;
// var pbNum = 35;
// var returnedArray = new Array();


// ***** Problem 1 - Multiples of 3 and 5

// function multiples and three parameters
var multiples = function(numberArg, mult3, mult5) {
	
	// local variables
	multThree  = 0;
	multFive   = 0;
	multSum   = 0;
	
	// loop until limit of numberArg has been reached
	for (var i = 1; i < numberArg; i++) {
		
		mult3 = 3 * i;
		mult5 = 5 * i;
	
	// as long as mult3 is less than numberArg add value of mult3 to multThree
	if (mult3 < numberArg) {
		
		multThree = multThree + mult3;
		
		// as long as mult5 is less than numberArg add value of mult5 to multFive
		if(mult5 < numberArg) {
			
			multFive = multFive + mult5;
		} 
	  
	  // break when comparisons are no longer true or when the loop has reached its limit, whichever comes first
	} else {
		
		break;
	}	
	
	}
	// add the sum of the multiples of 3 and 5 and assign to multSum
	multSum = multThree + multFive;

// return the overall sum of the multiples of 3 and 5
return multSum;
	
};


// ***************************************************************************************************************************

// // ***** Problem 2 - Powerball Number Generator *****
// 
// // function pbnumGenerator with 2 arguments
// var pbnumGenerator = function(numArg1, numArg2) {
// 	
	// // array
	// var pballArray = new Array();
// 	
	// // loop until limit
	// for (var i = 0; i < 5; i++) {
// 		
		// // calculate a random number and assign its value to pballArray
		// pballArray[i] = Math.round((Math.random() * numArg1) + 1);
// 		
		// // if condition is true, calculate a random number and assign its value to index 5 of pballArray
		// if (i === 4) {
// 			
			// pballArray[5] = (Math.floor(Math.random() * numArg2) + 1);
		// }
	// }
// // return pballArray with its elements
// return pballArray;
// };


// MAIN CODE

// Problem 1
// calling the function multiples, sending three arguments and assigning the returned value to multResult
multResult = multiples(sndNumber, num1, num2);

// output the returned value
console.log("The sum of the multiples of 3 and 5 is " + multResult + ".");


// // Problem 2
// // call function, send two values and assign returned array to new returnedArray
// returnedArray = pbnumGenerator(intFive, pbNum);
// 
// // output message
// console.log("Initial five: \n");
// 
// // loop until limit
// for (var i = 0 ; i < 5; i++) {
// 	
	// // output returnedArray
	// console.log(returnedArray[i]);
// 	
	// // if condition is true, output message and returnedArray
	// if (i === 4) {
// 		
	// console.log("Powerball: \n");
	// console.log(returnedArray[5]);
	// }
// }



