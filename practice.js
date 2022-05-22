function test(){
    let _name=document.getElementById("txtName").value;
    let userAge=document.getElementById("txtAge").value;
    let userGender=document.getElementById("selGender").value
    
    console.log(_name,userAge,userGender);
}

function dobleC()
{
    alert("double");
}

sum();
function sum(){
    console.log(10+10);
}


let sum2 = function(){ console.log(3+3);}
sum2();

console.log(sum2());
