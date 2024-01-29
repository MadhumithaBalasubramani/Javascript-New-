document.getElementById("a").style.background="red";
document.getElementById("p").style.cssText="color:yellow;font-size:50px; background:red";
let pa=document.getElementsByClassName("p1");
let para=document.getElementsByTagName("p");
for(i in para )
{
    para[i].style.cssText="color:green;padding-left:20px;font-size:20px; background:yellow";
}
for(i in pa )
{
    pa[i].style.cssText="color:blue;padding-left:20px;font-size:20px; background:yellow";
}

document.querySelector("#a")
document.querySelectorAll(".p1")
document.querySelectorAll("p1")