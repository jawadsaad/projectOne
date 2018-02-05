function rot13(message){
    if (message == "") {
        return "";
    }
    
  var regexp = /[a-z]/gi;
    var regexp2 = /[a-z]/i;
    var matches = message.match(regexp);
    var rotMess = [];
  
    
    var alphaHalf1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
    
    var alphaHalf2 = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    for (var i = 0; i < matches.length; i++) {
        for (var y = 0; y < 13; y++) {
            if (matches[i].toLowerCase() === alphaHalf1[y]) {
                if (matches[i] === matches[i].toLowerCase()) {
                    rotMess.splice(i, 1, alphaHalf2[y]);
                } else {
                    rotMess.splice(i, 1, alphaHalf2[y].toUpperCase());
                }
            } else if (matches[i].toLowerCase() === alphaHalf2[y]) {
                if (matches[i] === matches[i].toLowerCase()) {
                    rotMess.splice(i, 1, alphaHalf1[y]);
                } else {
                    rotMess.splice(i, 1, alphaHalf1[y].toUpperCase())
                }
            }
        }
    }
    
    for (var i = 0; i < message.length; i++) {
        if (!regexp2.test(message[i])) {
            rotMess.splice(i, 0, message[i]);
            
        }
    
    }
    
    return rotMess.join("");
    
}