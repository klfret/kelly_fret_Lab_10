//alert("Lab 10 - JavaScript works! - 25 September 2014");


// Kelly L. Fret
// SDI 1409
// Lab 10
// 25 September 2014



// Global variables
var numFive = 5;
var numThousand = 21;


var fiveMultiples = function(numThou, num5) {
	
	incrFive = 0;
	incrOne = 1;
	incrSum = 0;
	
	while (incrOne < numThou) {
		
		incrFive = incrOne * num5;
		incrOne++;
		console.log("Increment by five = " + incrFive);
		//console.log("\n");
		
		incrSum = incrSum + incrFive;
		//console.log("Increment sum = " + incrSum);
		
		//break;
	};
	
return incrSum;
	
};

fiveMultiples(numThousand, numFive);

console.log("Increment sum = " + incrSum);



