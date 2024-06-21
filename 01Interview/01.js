
/////////////////////////01///////////////

// const a = "12";
// console.log(typeof(a))
// console.log(typeof(+a))

// //if we write the +sign before the number then the string change int to the number.

// const b = "hi";
// console.log(+b)

// //if we change the string into the number using same method then is will show NAN
 
 
//////////////////02//////////////////////////////////

// console.log(NaN === NaN) // false

//==>In JavaScript, NaN (which stands for "Not-a-Number") is a special value that represents an invalid number. According to the IEEE 754 floating-point standard, which JavaScript follows, NaN is not considered equal to any value, including itself. Therefore, comparing NaN to NaN using the === operator returns false.

////////////////03//////////////////////////////////////

// console.log(1<2<3); //true 
// console.log(1>2>3); //false

// First Comparison (1 < 2):
// 1 < 2 evaluates to true.
// Second Comparison (true < 3):
// In JavaScript, true is coerced to 1 when used in a   numeric context.
// So, true < 3 becomes 1 < 3, which evaluates to true.
// Therefore, the output of console.log(1 < 2 < 3); is true.


/////////////////4////////////////////
const arr = ["a","b","c","d"];
const changeValue = document.getElementById("hello")
var i = 0;
changeValue.onclick=()=>{
    changeValue.innerHTML=arr[i];
    i++;
}

