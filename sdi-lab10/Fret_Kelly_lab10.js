//alert("Lab 10 - JavaScript works! - 25 September 2014");


// Kelly L. Fret
// SDI 1409
// Lab 10
// 25 September 2014



// Global variables
//var numFive = 5;
var numThousand = 11;


var fiveMultiples = function(numThou, multNum) {
	
	incrFive = 0;
	incrOne = 1;
	incrSum = 0;
	
	while (incrOne < numThou) {
		
		incrFive = incrOne * multNum;
		incrOne++;
		console.log("Increment by five = " + incrFive);
		//console.log("\n");
		
		incrSum = incrSum + incrFive;
		//console.log("Increment sum = " + incrSum);
		
		//break;
	};
	
return incrSum;
	
};

userNum = parseInt(prompt("Enter a \"3 or 5\": ", "3"));

	if (userNum === 3 || userNum === 5) {
		
		multResult = fiveMultiples(numThousand, userNum);
	} else {
		console.log("Invalid entry.");
	}
	
// multResult = fiveMultiples(numThousand, userNum);

console.log("Increment sum = " + multResult);



