// Next LineIn

// function nextInLine(arr, item) {
//     arr.push(item);
//     // return item;
//     return arr.shift();
// }

// var textArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(textArr));
// console.log(nextInLine(textArr, 6));
// console.log("After: " + JSON.stringify(textArr));

// function addingNum(here, there) {
//     here.push(there);
//     // return there;
//     return here.shift();
// }

// var textHere = [4, 5, 6, 7 ,8];

// console.log("Before: " + JSON.stringify(textHere));
// console.log(addingNum(textHere, 9));
// console.log("After: " + JSON.stringify(textHere));


// Use Conditional Logic with If STatement
//examples:

// function ourTrueOrFalse(isItTrue) {
//     if (isItTrue) {
//         return "Yes, it's true";
//     }
//     return "No, it's false";
// }

// // function trueOrFalse(wasThatTrue) {
// //     if (wasThatTrue) {
// //         return "Yes, that was true";
// //     }

// //     return "No, that was false";

// // }

// console.log(ourTrueOrFalse(true));



// comparation with the Equality operator

function testEqual(val) {
    if (val == 12) { // change this line
        return "Equal";
    }
    return "Not Equal";
}
// chase this value to test
console.log(testEqual(11));


function ram(age) {
    if (age ==40) {
        return "barabar";
    }
    return "barabar chhaina";
}
console.log(ram(40));