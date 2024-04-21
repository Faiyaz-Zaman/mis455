function Calculate(){
    var total = parseInt(document.getElementById("marks").value);
    var grade = "";
    if(total>=90 && total<101){
        grade="you got A";
    }
    else if(total>=85){
        grade="you got A-";

    }
    else if(total>=85 && total<90){
        grade="you got A-";

    }
    else if(total>=80 && total<85){
        grade="you got B+";

    }
    else if(total>=75 && total<80){
        grade="you got B";

    }
    else if(total>=70 && total<75){
        grade="you got B-";

    }
    else if(total>=65 && total<70){
        grade="you got C+";

    }
    else if(total>=60 && total<65){
        grade="you got C";

    }
    else if(total>=55 && total<60){
        grade="you got C-";

    }
    else if(total>=50 && total<55){
        grade="you got D";

    }
    else{
        grade="Sorry you have failed"
    }
    document.getElementById("grade").value = grade;
