
function alwaysHungry(arr) {
    var found = false;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == "food") {
            console.log("yummy");
            found = true
        }
    }
    if (!found) {
        console.log("hungry")
    }
    
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4,1,5,7,2]);

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]) 
        }
    }
    return filteredArr;
}
var result = highPass([6,8,3,10,-2,5,9], 5)
console.log(result);


function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    
    for(var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        }
    var avg = sum/arr.length
    for (var i=0; i < arr.length; i++) {
        if(arr[i] > avg) {
            count++
        } 
    }
    return count;
}
var result = betterThanAverage([6,8,3,10,-2,5,9]);
console.log(result);


function reverse(arr) {
    var newArr = [];
    var numArr = arr.length;
    for (i = 0; i < numArr; i++) {
        newArr[i] = arr.pop(i); 
    }
    return newArr;
    }






    var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);


function fibonacciArray(n) {
    var fib = [0, 1];
    
    for(i=1; i<n; i++) {
        var var2 = 0;
        var2 = fib[i] + fib[i-1];
        fib.push(var2);
    }
    return fib;
}
var result = fibonacciArray(10);
console.log(result);