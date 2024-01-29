const a=100;
console.log(a)
var b=2000;
console.log(b);
var b=50;
console.log(b);
let c=10;
console.log(c);
let c1=100;
console.log(c1);
j="30";
console.log(j)
k=30;
console.log(k===j);//30>10

// 
if(k>=j){
    document.write(`<br>offer available`);
}
function functionname(){
    statment
}

function operaticon()
{
    let price=document.getElementById("pro").value;
    let quantity=document.getElementById("prod").value;
    if(price>quantity)//200>2
    {
        document.getElementById("shop").innerHTML="offer availabe"
    }
    else
    {
        document.getElementById("shop").innerHTML="not availabe "
    }
}
function exper(){
    let depart=document.getElementById("department").value;
    let experience=document.getElementById("exp").value;

if(depart=="Sales"|| depart=="devel")
{

    if((experience>=2)&& (experience<=6))//1 >=2 || 1<=6
    {
         document.getElementById("Experience").innerHTML="5000 Increament"
    }
    else if(experience>9)
    {
        document.getElementById("Experience").innerHTML="10000 Increament"
    }
    else if(experience>10)
    {
        document.getElementById("Experience").innerHTML="15000 Increament"
    }
    else
    {
        document.getElementById("Experience").innerHTML="no Increament"
    }
}
    else
    {
        document.getElementById("Experience").innerHTML="not applicable"
    }
}
//logical operator:&& 