var numbers = [];
var sum = 0;

for (i = 1; i<=1000; i++) {
    numbers.push(i);
}

console.log(numbers);


// try to use methods and better style of code

primeNumbers = []

for (var i = 1000; i > 1; i--) {
    var j=i-1;
    if (i == 2){primeNumbers.push(i)}
    else if (i%j == 0){continue;}
    else{
        for (j;j>0;j--){
            if (j == 1){primeNumbers.push(i)}
            else if (i%j == 0){break}
        }    
    }
}

console.log(primeNumbers)

/*read about callbacks*/


//need better definition for sum
primeNumbers.forEach(function(item){
    return sum+=item
})

var count = primeNumbers.reduce(function(x, y){
    return x+=1
}, 0)

console.log(sum)
console.log(count)

