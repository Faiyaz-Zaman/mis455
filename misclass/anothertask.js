function calc(){
    var semester =parseInt(document.getElementById("semestercount").value);
    var cred =parseInt(document.getElementById("creditcount").value);
    var show = "";
    if(semester>6 && cred>90){
        show = "good progress";
    }
    else if(semester>4 && cred<60){
        show = "need to improve a bit";
    }else{
        show = "need to improve a lot"
    }
    document.getElementById("display").innerHTML = show;
    document.getElementById("display1").value = show;
}