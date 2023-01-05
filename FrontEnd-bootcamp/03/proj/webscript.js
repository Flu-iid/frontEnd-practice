//main fn
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

//web
function nextScript() {
    startVal = document.getElementById("start").value;
    endVal = document.getElementById("end").value;
    stepVal = document.getElementById("step").value;

    var primeNumbers = arrayMaker(startVal, endVal, stepVal).filter(function(item){
        return checkPrime(item)
    });
    var sum = primeNumbers.reduce(function(x, y){
        return x+y
    });
    var count = primeNumbers.reduce(function(x){
        return x+=1
    });

    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
    alert(stepVal);
    alert(sum);

    document.getElementById("array").innerHTML = primeNumbers;
    document.getElementById("count").innerHTML = count;
    document.getElementById("sum").innerHTML = sum;
}