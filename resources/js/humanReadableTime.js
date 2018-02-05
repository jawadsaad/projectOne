function formatDuration(seconds) {
    if (seconds < 0) {
        return "Pretty sure time is positive!";
    } else if (seconds == 0) {
        return "Now";
    } else {
        var years = Math.floor(seconds / 31536000);
        var days = Math.floor(((seconds / 31536000) - years) * 365);
        var hours = Math.floor(((((seconds / 31536000) - years) * 365) - days) * 24);
        var minutes = Math.floor(((((((seconds / 31536000) - years) * 365) - days) * 24) - hours) * 60);
        var remainingSeconds = Math.round(((((((((seconds / 31536000) - years) * 365) - days) * 24) - hours) * 60) - minutes) * 60);
        
        if (remainingSeconds === 60) {
            minutes = minutes + 1;
            remainingSeconds = 0;
        }
        
        var prelimTimeArray = [timeUnitChecker(years, "year"), timeUnitChecker(days, "day"), timeUnitChecker(hours, "hour"), timeUnitChecker(minutes, "minute"), timeUnitChecker(remainingSeconds, "second")];
        
        var timeArray = [];
        
        prelimTimeArray.forEach(function(element) {
           if (element !== undefined) {
               timeArray.push(element);
           } 
        });
        
        if (timeArray.length === 1) {
            return timeArray[0];
        } else if (timeArray.length === 2) {
            return timeArray[0] + " and " + timeArray[1];
        } else if (timeArray.length === 3) {
            return timeArray[0] + ", " + timeArray[1] + " and " + timeArray[2];
        } else if (timeArray.length === 4) {
            return timeArray[0] + ", " + timeArray[1] + ", " + timeArray[2] + " and " + timeArray[3];
        } else if (timeArray.length === 5) {
            return timeArray[0] + ", " + timeArray[1] + ", " + timeArray[2] + ", " + timeArray[3] + " and " + timeArray[4];
        }
    }
}

function timeUnitChecker(amountOfTime, timeUnit) {
    if (amountOfTime === 1) {
        return amountOfTime + " " + timeUnit;
    } else if (amountOfTime > 1) {
        return amountOfTime + " " + timeUnit + "s";
    }
}