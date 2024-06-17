// Author: Fatemeh Talebi
var element=document.getElementById("userInput")
function fun(){
    // get the heigth of triangles from user
    var value=Number(element.value)
    var result=document.getElementById("result")
    var stars=""
    // chek if user input an integer
if (isNaN(value)){
    result.innerText="Enter a valid number"
}

else{
    // draw triangles by stars
    for (let i=1;i<=value;i++){

        for (let j=1;j<=value-i;j++){
            stars+=" "
           }
        for (let j=1;j<=i;j++){
            stars+="*"
           } 
           stars+="\n"
}
result.innerText=stars
}
}
