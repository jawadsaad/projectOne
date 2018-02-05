window.onload = function() {
    var welcomesign = document.getElementById('welcomesign');
    
    var divider = document.getElementById('divanimator');
    
    var p1 = document.getElementById('p1');
    
    var p2 = document.getElementById('p2');
    
    var p3 = document.getElementById('p3');
    
    var li1 = document.getElementById('li1');
    
    var li2 = document.getElementById('li2');
    
    var li3 = document.getElementById('li3');
    
    var start = document.getElementById('start');
    welcomesign.classList.add('welcomeToPosition');
    
    divider.classList.add('dividerAni');
    
    p1.classList.add('animateP');
    
    p2.classList.add('animateP');
    
    p3.classList.add('animateP2');
    
    li1.classList.add('animateLi');
    
    li2.classList.add('animateLi');
    
    li3.classList.add('animateLi');
    
    start.classList.add('animateStartBtn');
    
    var start = document.getElementById('start');
    start.addEventListener('click', startClicked, false);
    
    var prelvl1 = document.getElementById('pre-level1');
    
    var level2 = document.getElementById('level2');
    
    var level3 = document.getElementById('level3');
    
    var exitPage = document.getElementById('endofgame');
    
   function startClicked() {
       var welcomeContainer = document.getElementById('welcome');
       
//       var prelvl1 = document.getElementById('pre-level1');
//       welcomeContainer.classList.add('startClicked');
       
//       prelvl1.classList.add('bringInPreLvl1');
       welcomeContainer.classList.add('nodisplay');
       prelvl1.classList.remove('nodisplay');
   }
    
    // GENERATE RANDOM NUMBERS FOR GAME
    function randomNumGen() {
        var numberOfSeconds = Math.round(Math.random()*432000);
        
        while (numberOfSeconds < 43200) {
            numberOfSeconds = Math.round(Math.random()*432000);
        }
        
        return numberOfSeconds;
    }
    
    var numberOfSeconds = randomNumGen();
    
    function generateFibProd() {
        var n = Math.round(Math.random()*20);
        
        if (n < 10) {
            n += 10;
        }
        
        return F(n)*F(n+1);
    }
    
    var key = generateFibProd();
    
    // PLACE RANDOM NUMBERS IN GAME
    function createGame() {
        var msg = document.getElementById('msg');
        
        var message = "worm 2718 aka EnDGamE delivered to Walt Disney Nuclear Facility // T-" + numberOfSeconds + " seconds to catastrophic failure // passwordKey " + key;
        
        var encryptedMsg = rot13(message);
        
        msg.innerHTML = encryptedMsg;
        
        var timeDisplay = document.getElementById('timedisplay');
        
        timeDisplay.innerHTML = "TIME REMAINING: " + numberOfSeconds;
        
        var keyDisplay = document.getElementById('keydisplay');
        
        keyDisplay.innerHTML = "KEY: " + key;
        
        // POP UP WINDOW BUTTONS
        var returnToGame = document.getElementById('popbutton1');
        
        var continueToLevel2 = document.getElementById('popbutton2');
        
        var continueToLevel3 = document.getElementById('popbutton3');
        
        var playAgain = document.getElementById('popbutton4');
        
        var exit = document.getElementById('popbutton5');
        
        var exitRestartBtn = document.getElementById('exit-page-restartbtn');
        
        returnToGame.addEventListener("click", closePopUp, false);
        
        function closePopUp() {
            popUpWindow.classList.remove('display');
            
            returnToGame.classList.remove('display');
        }
        
        continueToLevel2.addEventListener("click", startLevel2, false);
        
        function startLevel2() {
            popUpWindow.classList.remove('display');
            
            continueToLevel2.classList.remove('display');
            
            prelvl1.classList.add('nodisplay');
            
            level2.classList.remove('nodisplay');

        }
        
        continueToLevel3.addEventListener("click", startLevel3, false);
        
        function startLevel3() {
            popUpWindow.classList.remove('display');
            
            continueToLevel3.classList.remove('display');
            
            level2.classList.add('nodisplay');
            
            level3.classList.remove('nodisplay');
            
        }
        
        playAgain.addEventListener("click", refreshPage, false);
        
        function refreshPage() {
            window.location.reload();
            exitPage.classList.add('nodisplay');
        }
        
        exit.addEventListener("click", takeToExitPage, false);
        
        function takeToExitPage() {
            popUpWindow.classList.remove('display');
            level3.classList.add('nodisplay');
            exitPage.classList.remove('nodisplay');
        }
        
//        exitRestartBtn.addEventListener("click", refreshPage, false);
        
        // POP-UP WINDOW
        var popUpWindow = document.getElementById('blackout');
        
        var popUpHeader = document.getElementById('popupheader');
        
        var popUpText = document.getElementById('poptext');
        
        
        // LEVEL ONE ROT13 GAMEPLAY
        var userDecryptBtn = document.getElementById('rot13submit');
        
        userDecryptBtn.addEventListener("click", userAttemptsDecryption, false);
        
        function userAttemptsDecryption() {
            var userAttempt = document.getElementById('rot13input').value;
            
            if (userAttempt == "" || userAttempt == " ") {
                return;
            } else if (userAttempt.toLowerCase() == message.toLowerCase()) {
                popUpWindow.classList.add('display');
                popUpHeader.innerHTML = "Correct! The decrypted message is: ";
                popUpText.innerHTML = message;
                continueToLevel2.classList.add('display');
            } else if (userAttempt.toLowerCase() != message.toLowerCase()) {
                popUpWindow.classList.add('display');
                popUpHeader.innerHTML = "Incorrect! Please try again!"
                returnToGame.classList.add('display');
            }
        }
        
        // LEVEL 2 HUMAN READABLE TIME GAMEPLAY
        
        var userCheckTimeBtn = document.getElementById('lvl2userattempt');
        
        userCheckTimeBtn.addEventListener("click", userAttemptsTimeConversion, false);
        
        function userAttemptsTimeConversion() {
            var userDays = parseInt(document.getElementById('days').value) * 86400;
            
            var userHours = parseInt(document.getElementById('hours').value * 3600);
            
            var userMins = parseInt(document.getElementById('minutes').value * 60);
            
            var userSecs = parseInt(document.getElementById('seconds').value);
            
            var userEnteredTime = [userDays, userHours, userMins, userSecs];

            for (var i = 0; i < userEnteredTime.length; i++) {
                if (isNaN(userEnteredTime[i])) {
                    userEnteredTime[i] = 0;
                }
            }
            
            var userEnteredTimeInSeconds = 0;
            
            for (var i = 0; i < userEnteredTime.length; i++) {
                userEnteredTimeInSeconds += userEnteredTime[i];
            }
            
            if (userEnteredTimeInSeconds === 0) {
                return;
            } else if (formatDuration(userEnteredTimeInSeconds) == formatDuration(numberOfSeconds)) {
                popUpWindow.classList.add('display');
                popUpHeader.innerHTML = "Correct! Time left until catastrophe is: ";
                popUpText.innerHTML = formatDuration(numberOfSeconds);
                continueToLevel3.classList.add('display');
            } else if (formatDuration(userEnteredTimeInSeconds) != formatDuration(numberOfSeconds)) {
                popUpWindow.classList.add('display');
                popUpHeader.innerHTML = "Incorrect! Please try again!"
                returnToGame.classList.add('display');
            }
        }
        
        // LEVEL 3 FIBONACCI GAMEPLAY
        
        var passwordBtn = document.getElementById('passwordbtn');
        
        passwordBtn.addEventListener("click", userEntersPassword, false);
        
        function userEntersPassword() {
            var passwordAttempt = document.getElementById('lvl3pw').value;
            var password = createFibPassword(key);
            
            if (passwordAttempt == "") {
                return;
            } else if (passwordAttempt == password) {
                popUpWindow.classList.add('display');
                popUpHeader.innerHTML = "Correct! The password is: ";
                popUpText.innerHTML = password;
                playAgain.classList.add('display');
                exit.classList.add('display');
            } else if (passwordAttempt != password) {
                popUpWindow.classList.add('display');
                popUpHeader.innerHTML = "Incorrect! Please try again!"
                popUpText.innerHTML = "";
                returnToGame.classList.add('display');
            }
        }
        
        
    }
    
    createGame();
    
    
    // LEVEL ONE ROT13
    var convertUserROT13 = document.getElementById('rot13submit2');
    
    convertUserROT13.addEventListener("click", displayROT13, false);
    
    var userROT13Msg = document.getElementById('decryptedmsg');
    
    function displayROT13() {
        var userROT13 = document.getElementById('rot13input2').value;
        
        var result = rot13(userROT13);
        
        userROT13Msg.innerHTML = result;
    }
    
    
    
    
    // LEVEL TWO HUMAN READABLE TIME
    var checkTime = document.getElementById('checktime');
    
    checktime.addEventListener("click", displayTime, false);
    
    var convertedTime = document.getElementById('convertedtime');
    
    function displayTime() {
        var seconds = document.getElementById('timetoconvert').value;
        
        var result = formatDuration(seconds);
        
        convertedTime.innerHTML = result;
    }
    
    
   // LEVEL THREE FIBONACCI  
    var checkfib = document.getElementById('fibcheckbtn');
    
    checkfib.addEventListener("click", displayFibResult, false);
    
    var fibresult = document.getElementById('fibcheckresult');
    
    function displayFibResult() {
        var prod = document.getElementById('fibchecker').value;
        var result = productFib(prod);
        
        fibresult.innerHTML = result;
    }
    
    
    // POP-UP + GAME FUNCTIONALITY
    
    
    
    
    
    

}