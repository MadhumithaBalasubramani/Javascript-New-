let obj=[
{name:"madhumitha",degree:"B.E",age:22},
{name:"gayathri",degree:"MBBS",age:23},
{name:"malini",degree:"MBBS",age:25},
{name:"prabha",degree:"MBBS",age:23},
{name:"maha",degree:"Bsc",age:24},
];

document.getElementById("h1").addEventListener('click',()=>{

   document.getElementById("di").innerHTML= obj.map((aro)=>{
        return `<br> Name:${aro.name} <br> Degree : ${aro.degree} <br> Age:${aro.age}`
        });
})


let filar=obj.filter((fil)=>fil.degree=="MBBS")

document.getElementById("hde").addEventListener('click',()=>{

    document.getElementById("di").innerHTML= filar.map((aro)=>{
         return `<br> <button onClick="addfun()">add course last using push</button> <br><button onClick="details()">add course first unshift</button> 
         <br><button onClick="a()">add course using splice</button><br>Name:${aro.name} <br> Degree : ${aro.degree} <br> Age:${aro.age}`
         
        });
 })
 //add course using push
 let addfun=()=>{
 let addcour={ name:"xyz", degree:"Mbbs",age:23 };
 filar.push(addcour);
 console.log(filar)
 document.getElementById("di").innerHTML= filar.map((aro)=>{
    return `<br> <br>Name:${aro.name} <br> Degree : ${aro.degree} <br> Age:${aro.age}`
    });
 }
 //add course using unshift

 let details=()=>{
 let obj1={
    name:"Keerthana",
    degree:"B.E",
    age:22
 }
filar.unshift(obj1)
console.log(filar)
document.getElementById("di").innerHTML= filar.map((aro)=>{
    return `<br> Name:${aro.name} <br> Degree : ${aro.degree} <br> Age:${aro.age}`
    });
 }
//using splice
 let a=()=>{
    let objsplice={
        name:"madhumitha",
        degree:"b.e",
        age:22
     }
     filar.splice(2,1,objsplice)
     console.log(filar)
 }
 let asplice=()=>{
     obj.splice(2,1)
     console.log(obj)
     document.getElementById("di").innerHTML=obj.map((de)=>{
        return `<br> name ${de.name} <br> degree ${de.degree} <br> ${de.age}`
     })
     }

 //using pop
 let delopr=()=>{
 obj.pop();
 console.log(obj)
 
 document.getElementById("di").innerHTML=obj.map((spli)=>{
    return `<br> name ${spli.name} <br> degree ${spli.degree} <br> ${spli.age}`
 })
 }

//using shift
let funcshift=()=>{
 obj.shift();
 console.log(obj);
}
//update
let update=()=>{
let up_date=obj.findIndex((upd)=>{
    return `<br>${upd.degree}=="B.E"`
})
obj[up_date].name="anitha"
console.log(obj)
document.getElementById("di").innerHTML=obj.map((up)=>{
    return `<br> name ${up.name} <br> degree ${up.degree} <br> ${up.age}`
 })
}

// all items to update
let allitem=()=>{
obj.map((item)=>{
    if(item.degree=="MBBS"){
        item.degree="bsc"
    }
    console.log(obj)
    document.getElementById("di").innerHTML=obj.map((alli)=>{
        return `<br> name ${alli.name} <br> degree ${alli.degree} <br> ${alli.age}`
     })
})
}
document.getElementById("sort").addEventListener('click',()=>{
    let s=obj.sort((a,b)=>{
        //console.log(a.age,b.age);
      return (a.name  < b.name) ? -1 : 0 
     
        
    })
   
    console.log(s)
})
 //push
/*let obj1=[{

    name: "xyz",
    hob: ["reading","baking","singing"],
    course1:()=>{
                console.log("HELLO")
            }
},
{   name: "abc",
    hob: ["reading","baking","singing"],
    course1:()=>{
            console.log("Hi")
        }
}];

document.write(`Naame: ${obj1[0].name}  Hob:${obj1[0].hob[2]} Function : ${obj1[0].course1()}<br>`)
document.write(`Naame: ${obj1[1].name}  Hob:${obj1[1].hob}Function : ${obj1[1].course1()}`)
*/

document.getElementById("btn").addEventListener('click',()=>{
 //<h1>Student</h1>
//document.body.appendChild(fh);
let line= document.createElement("br");
let form1=document.createElement("form");
form1.setAttribute("method","post")
form1.setAttribute("enctype","multipart/form-data");
form1.setAttribute("action","filterfruit.html");
let fh=document.createElement("h1");
let con=document.createTextNode("Enter the product  details");
fh.appendChild(con);
form1.appendChild(line);
let line1= document.createElement("br");
let inp1=document.createElement("input");
inp1.setAttribute("type","text");
inp1.setAttribute("placeholder","Enter name");
inp1.setAttribute("id","n1");
inp1.setAttribute("name","na1");
//form1.appendChild(line1);

let line2= document.createElement("br");
let inp2=document.createElement("input");
inp2.setAttribute("type","text");
inp2.setAttribute("placeholder","Enterdegree");
inp2.setAttribute("id","d1");

//form1.appendChild(line2);

let line3= document.createElement("br");

let inp3=document.createElement("input");
inp3.setAttribute("type","text")
inp3.setAttribute("placeholder","enter age")
inp3.setAttribute("id","g1");

//form1.appendChild(line3);

let inp4=document.createElement("input");
inp4.setAttribute("type","submit")
inp4.setAttribute("value","submit");
inp4.setAttribute("onClick","addObj()");
inp4.setAttribute("id","s1");
//document.body("br");
form1.appendChild(fh);

form1.appendChild(inp1);
form1.appendChild(inp2);
form1.appendChild(inp3);
form1.appendChild(inp4);
form1.appendChild(line);


document.getElementById("display").innerHTML="";
document.getElementById("display").appendChild(form1);
//document.getElementById("display").appendChild(br)
});

let addObj=()=>
{
    document.write("hello");
    
console.log("ss")
n1=document.getElementById("n1").value;
   /* let obj5={
        name:document.getElementById("n1").value,
        degree:document.getElementById("d1").value,
        age:document.getElementById("g1").value
            };      */    
    //obj.push(obj5);
    console.log();
}