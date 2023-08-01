
//Find odd elements in the given array by using normal function

var array = [5,4,3,2,1];
var oddarray = [];

function oddarr(array)
{
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2!=0)
        {
            oddarray.push(array[i]);
        }
    }
    return oddarray;
}
console.log(oddarr(array));

//Find odd elements in the given array by using anonymous function


var array = [12, 13, 14, 15, 16];
var oddarray = [];
var odd = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      result.push(array[i]);
    }
  }
  return oddarray;
};
console.log(odd(array));

//Find odd elements in the given array by using 
IIFE (Immediately Invoked Function Expression)

(function odd(array) {
  var oddarray = [];
  for (var i = 0; i < arr.length; i++) {
    if (array[i] % 2 != 0) {
      oddarray.push(array[i]);
    }
  }
  console.log(oddarray);
})([12, 13, 14, 15, 16]);

//Find odd number in an array by using Arrow Function (ES6)

const odd = (array) => {
  var oddarray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      oddarray.push(array[i]);
    }
  }
  return oddarray;
};
console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
