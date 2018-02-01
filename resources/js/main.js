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
    
   function startClicked() {
       var welcomeContainer = document.getElementById('welcome');
       
       var prelvl1 = document.getElementById('pre-level1');
       welcomeContainer.classList.add('startClicked');
       
       prelvl1.classList.add('bringInPreLvl1');
   }
    

}