function position()
{
    let age=document.getElementById("agee").value;
    if(age<24){
        document.getElementById("posi").innerHTML="Fresher"
    }
    else if(age<30){
        document.getElementById("posi").innerHTML="Senior Officer"
    }
    else if(age<35){
        document.getElementById("posi").innerHTML="HR"
    }
    else{
        document.getElementById("posi").innerHTML="Manager"
    }
}
