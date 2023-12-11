/* STRINGS */
let testString = "If you judge people, you have no time to love them";
logMessageToPage("To uppercase", testString.toUpperCase());

testString = "THE SUCCESSFUL WARRIOR IS THE AVERAGE MAN, WITH LASER-LIKE FOCUS";
logMessageToPage("To lowercase", testString.toLowerCase());

testString = "Learn to val";
logMessageToPage("Concatenate", testString.concat("ue yourself, which means: t", "o fight for your happiness."));

testString = "The most weird things are the funniest to say, because martians diminish them";
logMessageToPage("Before Replace", testString);
logMessageToPage("After Replace", testString.replace("weird", "important").replace("funniest", "hardest").replace("martians", "words"));

testString = "In order to be irreplaceable one must always be different";
logMessageToPage("Last character", testString, testString.charAt(testString.length-1));
testString = "Those who dare to fail miserably can achieve greatly";
logMessageToPage("Last character", testString, testString.charAt(testString.length-1));
testString = "Well done is better than well said";
logMessageToPage("Last character", testString, testString.charAt(testString.length-1));
testString = "You are what you believe yourself to be";
logMessageToPage("Last character", testString, testString.charAt(testString.length-1));

/* ARRAYS */

// Delar av array
let testArray = [4, 23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24, 100];
logMessageToPage( testArray.includes(33) ? "testArray contains 33." : "testArray does NOT contain 33!");

logMessageToPage("Last element of array was", testArray.pop());
logMessageToPage("First element of array was", testArray.shift());
logMessageToPage("Slice of array", testArray.slice(3, 7).join(","));

// Kopiera och vända
testArray = [23, 1, 2, 88, 54];
const revArray = testArray.reverse();
const copyArray = revArray.slice();
logMessageToPage("Reversed array", testArray.join(","), revArray.join(","));
logMessageToPage("Copy array", revArray, copyArray);

// Filter
testArray = [4, 23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24, 100];
logMessageToPage("TESTARRAY", testArray.join(","));
logMessageToPage("Values above 50", testArray.filter( (val) => val > 50 ).join(","));
logMessageToPage("Values below 50", testArray.filter( (val) => val < 50 ).join(","));
logMessageToPage("Values between 20 and 70", testArray.filter( (val) => (val >=20) && (val <= 70) ).join(","));

// ForEach
testArray = [4, 23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24, 100];
doubleArray = testArray.slice();
const evenArray = testArray.slice();
const multArray = testArray.slice();
doubleArray.forEach( (val, index, array) => array[index] = val*2 );
evenArray.forEach( (val, index, array) => array[index] = !(val % 2) );
multArray.forEach( (val, index, array) => array[index] = val*val );
logMessageToPage("TESTARRAY", testArray.join(","));
logMessageToPage("Double values", testArray.join(","));
logMessageToPage("Even values", evenArray.join(","));
logMessageToPage("Multiplied values", multArray.join(","));


/* MATH */


// Absolutbelopp
let numArray = [6, -2, -5, 3, 6, -3, -75, 5, 23];
logMessageToPage("NUMARRAY", numArray.join(","));
numArray.forEach( (val, idx, arr) => arr[idx] = Math.abs(val));
logMessageToPage("Absolute values", numArray.join(","));


// Avrunda
numArray = [3.23, 5.21, 75.3, 5.879, 3.9, 9.5];
const roundArray = numArray.slice();
const ceilArray = numArray.slice();
const floorArray = numArray.slice();
roundArray.forEach( (val, idx, arr) => arr[idx] = Math.round(val));
ceilArray.forEach( (val, idx, arr) => arr[idx] = Math.ceil(val));
floorArray.forEach( (val, idx, arr) => arr[idx] = Math.floor(val));
logMessageToPage("NUMARRAY", numArray.join(","));
logMessageToPage("Rounded values", roundArray.join(","));
logMessageToPage("Rounded up", ceilArray.join(","));
logMessageToPage("Rounded down", floorArray.join(","));

// Högsta och lägsta värde
numArray = [6, -2, -5, 3, 6, -3, -75, 5, 23];
logMessageToPage("NUMARRAY", numArray.join(","));
logMessageToPage("Smallest", Math.min(...numArray));
logMessageToPage("Highest", Math.max(...numArray));



// Skriv ut resultat på sidan istf. att använda console.log... så tomt annars :)
function logMessageToPage() {
    const messageBox = document.querySelector("#messagebox");
    const messageRow = document.createElement("div");
    messageRow.innerHTML = Array.from(arguments).join(" | ");    
    messageBox.appendChild(messageRow);
}