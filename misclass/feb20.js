function process () {

    var courses = parseInt(document.getElementById("coursesBox").value) ; 
    var fees = parseInt(document.getElementById("feesBox").value) ;
    
    var total = courses * fees ; 
    if(total>=40000){
        var discount = total * .20 ;
    }
    else{
        var discount = total * .10;
    }
     
    var payable = total - discount; 


    document.getElementById("discountBox").value = discount ; 
    document.getElementById("payableBox").value = payable;
    


}