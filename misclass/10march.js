//    var a = 10;
//    var b = 5; 

//   // var sum = a + b; 
//   var storage =  sum (a, b); 
//   var result = multiply (a,b); 
//   console.log("multiplication result is:", result); 
  
//   function sum (a, b) {
     
//     var total;
//     total = a + b;
//     console.log(total); 

//   }


//   function multiply (a, b){
//     var output = a * b;
//     return output; 
//   }

function connect () {

    var url = "https://jsonplaceholder.typicode.com/users";

    fetch (url)
    .then (res => res.json() )
    .then (data => show(data) )
}


function show (data){
    console.log(data);
 var oldContent = document.getElementById("container"); 

 for (var i=1; i<=data.length; i++){
   
     var newDiv = document.createElement("div"); 
     newDiv.innerHTML = `Name: ${data[i-1].name} <br>
                         Email: ${data[i-1].email}`;
     newDiv.classList.add("innerStyle")

     oldContent.appendChild(newDiv); 

     
 }
     

}
