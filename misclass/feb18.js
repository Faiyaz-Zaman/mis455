var q1 = 14;
var q2 = 20;
var q3 = 12;

var avgQ = (q1+q2+q3)/3 ; 
console.log ("Quiz Average -", avgQ); 
document.getElementById("quiz_result").innerHTML = 
`the avg. of all quizzes:<span class="highlight">${avgQ}</span> `;