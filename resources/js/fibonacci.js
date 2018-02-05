function productFib(prod) {
    //var output = [];
    if (prod < 0) {
        return "There are no negative Fibonacci sequence numbers!"
    } else if (prod == "") {
        return "";
    }
    
    for (var i = 0; i < prod + 3; i++) {
        if (prod > F(i) * F(i+1)) {
            continue;
        } else if (prod == F(i) * F(i+1)) {
            return "True! F(" + i + ") = " + F(i) + "; F(" + (i+1) + ") = " + F(i+1) + "; " + F(i) + " x " + F(i+1) + " = " + prod;
//            return  [F(i), F(i+1), true];
        } else if (prod < F(i) * F(i+1)) {
            return "False! " + prod + " is greater than F(" + (i-1) + ") x F(" + i + ") = " + F(i-1)*F(i) + " and is less than F(" + i + ") x F(" + (i+1) + ") = " + F(i)*F(i+1);
//            return  [F(i), F(i+1), false];
        }
    } 
}

function F(n) {
    var output = 0;
    var arr = [0 , 1];
    
    if (n === 0) {
        return arr[n];
    } else if (n === 1) {
        return arr[n];
    } else {
        for(var i = 2; i <= n; i++) {
            arr.push(arr[i-1] + arr[i-2]);
        } 
    }
    
    return arr[n];
}

function createFibPassword(key) {
    for (var i = 0; i < key; i++) {
        if (key == F(i) * F(i+1)) {
            var half1 = i.toString();
            var half2 = (i+1).toString();
            return parseInt(half1 + half2);
        }
    }
}