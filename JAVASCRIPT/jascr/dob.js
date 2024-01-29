document.getElementById("age").addEventListener("click",()=>{
    let cmon=Number(document.getElementById("cmonth").value);
    let bmon=Number(document.getElementById("bmonth").value);
    let cyr=Number(document.getElementById("cyear").value);
    let byr=Number(document.getElementById("byear").value);
    agemonth=cmon-bmon;
    ageyear=cyr-byr;
    if(agemonth>cmon)
    {
    bir_age=ageyear-1;
    console.log(bir_age);
    }
    document.getElementById("res").innerHTML=ageyear;
    document.getElementById("mon").innerHTML=agemonth;

})
