//fn
function arrayMaker(start, end, step) {
    var array = [];
    for (var i = start; i <= end; i += step){
        array.push(i)
    }
    return array
}

function checkPrime (number) {
    if (number < 2) {
        return false;
      } else {
        for (var i = 2; i < number; i++) {
          if (number % i == 0) {
            return false;
          }
        }
        return true;
      }
}
// how to make this ternary

// var
var startVal = 1
var endVal = 1000
var stepVal = 1

var numbers = arrayMaker(startVal, endVal, stepVal)

var primeNumbers = numbers.filter(function(item){
    return checkPrime(item)
})

var sum = primeNumbers.reduce(function(x, y){
    return x+y
},)

var count = primeNumbers.reduce(function(x, y){
    return x+=1
}, 0)

console.log("array: " + numbers)
console.log("prime array: " + primeNumbers)
console.log("sum: "+ sum)
console.log("count: "+count)

