function Calculate(){
var unitprice = parseInt(document.getElementById("unitpricecost").value);
var quantity = parseInt(document.getElementById("qua").value);

var total = unitprice * quantity;
var discount = 0;

var payable = 0;
if(total>1000){
    discount = total * .20;
}
else if(total>500){
    discount = total*.10;
}
else if(total>250){
    discount = total*.05;
}
else{
    discount=0;
}
 payable=total - discount;

 document.getElementById("discountbox").value = discount;
 document.getElementById("payable").value = payable;
}