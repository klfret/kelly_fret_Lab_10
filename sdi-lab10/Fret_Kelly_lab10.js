//alert("Lab 10 - JavaScript works! - 25 September 2014");


// Kelly L. Fret
// SDI 1409
// Lab 10
// 25 September 2014



// Global variables
//var numThousand = 1000;
//var num1 = 3;
//var num2 = 5;


var fiveMultiples = function(numThou, mult3, mult5) {
	
	incrThree  = 0;
	incrFive   = 0;
	incrSum   = 0;
	
	for (var i = 1; i < numThou; i++) {
		
		mult3 = 3 * i;
		mult5 = 5 * i;
	if (mult3 < numThou) {	
		console.log("mult3 = " + mult3);
		incrThree = incrThree + mult3;
		console.log("IncrThree = " + incrThree);
		console.log("\n");
		
		if(mult5 < numThou) {
			console.log("mult5 = " + mult5);
			incrFive = incrFive + mult5;
			console.log("IncrFive = " + incrFive);
			console.log("\n");
		} 
		
	} else {
		//console.log("Reached my limit.");
		break;
	}	
	
	}
	incrSum = incrThree + incrFive;
	
return incrSum;
	
};
		
multResult = fiveMultiples(10, 3, 5);

console.log("Increment sum = " + multResult);



