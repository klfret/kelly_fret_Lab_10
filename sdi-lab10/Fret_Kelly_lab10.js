//alert("Lab 10 - JavaScript works! - 25 September 2014");


// Kelly L. Fret
// SDI 1409
// Lab 10
// 25 September 2014


// // ***** Problem 1 - Multiples of 3 and 5
// 
// // Global variables
// var sndNumber = 1000;
// var num1 = 3;
// var num2 = 5;
// var multResult;
// 
// 
// // function multiples and three parameters
// var multiples = function(numberArg, mult3, mult5) {
// 	
	// // local variables
	// multThree  = 0;
	// multFive   = 0;
	// multSum   = 0;
// 	
	// // loop until limit of numberArg has been reached
	// for (var i = 1; i < numberArg; i++) {
// 		
		// mult3 = 3 * i;
		// mult5 = 5 * i;
// 	
	// // as long as mult3 is less than numberArg add value of mult3 to multThree
	// if (mult3 < numberArg) {
// 		
		// multThree = multThree + mult3;
// 		
		// // as long as mult5 is less than numberArg add value of mult5 to multFive
		// if(mult5 < numberArg) {
// 			
			// multFive = multFive + mult5;
		// } 
// 	  
	  // // break when comparisons are no longer true or when the loop has reached its limit, whichever comes first
	// } else {
// 		
		// break;
	// }	
// 	
	// }
	// // add the sum of the multiples of 3 and 5 and assign to multSum
	// multSum = multThree + multFive;
// 
// // return the overall sum of the multiples of 3 and 5
// return multSum;
// 	
// };
// 		
// // MAIN CODE
// 
// // calling the function multiples, sending three arguments and assigning the returned value to multResult
// multResult = multiples(sndNumber, num1, num2);
// 
// // output the returned value
// console.log("The sum of the multiples of 3 and 5 is " + multResult + ".");



// ***************************************************************************************************************************

// ***** Problem 2 - Powerball Number Generator *****

// Global Variables
var intFive = 59;
var pbNum = 35;
var returnedArray = new Array();


var pbnumGenerator = function(numArg1, numArg2) {
	
	
	var pballArray = new Array();
	
	
	for (var i = 0; i < 5; i++) {
		
		// pballArray[i] = (Math.floor(Math.random() * numArg1) + 1);
		pballArray[i] = Math.round(Math.abs((Math.random() * numArg1) + 1));
		//pballArray[i] = Math.abs((Math.random() * numArg1) + 1);
		console.log(pballArray[i]);
			
		if (pballArray[i] === pballArray[i] - 1) {
			pballArray[i] = pballArray[i] + 1;
			console.log(pballArray[i]);
		}
		
		if (i === 4) {
			
			pballArray[5] = (Math.floor(Math.random() * numArg2) + 1);
		}
	}

return pballArray;
};


// MAIN CODE

returnedArray = pbnumGenerator(intFive, pbNum);

console.log("Initial five: \n");
for (var i = 0 ; i < 5; i++) {
	
	console.log(returnedArray[i]);
	
	if (i === 4) {
		
	console.log("Powerball: \n");
	console.log(returnedArray[5]);
	}
}



