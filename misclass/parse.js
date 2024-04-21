function calc(){
var quiz1 = parseInt(document.getElementById("Q1").value) ;

var quiz2 = parseInt(document.getElementById("Q2").value); 

var sum = (quiz1+quiz2)/2; 
console.log (sum); 
document.getElementById("quiz_result").innerHTML = 
`the avg. of all quizzes:<span class="highlight">${sum}</span> `;
}