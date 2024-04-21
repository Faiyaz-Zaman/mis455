// var arr = [21,50,37,42,38,26,11,35];
// var i;
// var sum =0;
// var count = 0;
// var sum2=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         sum = sum + arr[i];
//     }
//     else{
//         sum2 = sum2 + arr[i];
//         count+=1

//     }

// }
// var avg = sum2/count;
// console.log("Average of all odd numbers",avg);
// console.log("Sum of even numbers",sum);

// var arr2 = [100,520,628,703,426,318,808];
// var sum3 =0;
// var avg2=0;
// for(i=0;i<arr2.length;i++){
//     if(arr2[i]>500){
//         sum3 = sum3 + arr2[i];
//         count++;
//     }              ygb ygbbbbbbbbbbbbbbbbbbbbbbb

// }
// avg2 = sum3/count;
// console.log("avg greater than 500",avg2);

var presentyear=2024;
var by = 1993;
var i;
var leapyear =(presentyear-by)/4;
var bonus=0;
for(i=1;i<=leapyear;i++){
    bonus = bonus + 500;
 
    }
    if(leapyear>5 && by<1994){
        bonus = bonus+2000;
        bonus = bonus - 1000;  }
    else if(leapyear>5){
        bonus = bonus-1000;
    }
console.log(bonus);