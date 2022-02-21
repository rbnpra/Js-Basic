// function xyz() {
//     var a=10, b=20;
//     var c = a+b;
//     // return c;
//     return function(a, b, c);
// }
// var result = xyz();
// // console.log(result);

// Closers

// Is a approach in javaScript to retain the state of a function even after its execution.

// function createCounter(incrementBy) {
//     var counter=0;
//      return function() {
//          return counter+=counter+incrementBy;
// }
// }

//  var countBy1 = createCounter(1);

//  console.log(countBy1());

//  console.log(countBy1());

//  console.log(countBy1());

//  console.log(countBy1());

//  console.log(countBy1());



//  var countBy2 = createCounter(2);
//  console.log(countBy2());
//  console.log(countBy2());
//  console.log(countBy2());
//  console.log(countBy2());
//  console.log(countBy2());
//  console.log(countBy2());
//  console.log(countBy2());




let DateUtil = {
   date:function() {
        return new Date().getDate();
    },
    month:function() {
        return new Date().getMonth();
    },
    year:function() {
        return new Date().getYear();
    },
}

console.log(DateUtil.date());
console.log(DateUtil.month());
console.log(DateUtil.year());