let product=[
{ 
    pro_name:"tv",brand:"samsung",cost:40000,size:"15inch",p_img:"image/tv.jpg",description:"the rate 4.3"
},
{
    pro_name:"tv",brand:"   LG",cost:40000,size:"15inch",p_img:"image/LG TV.jpg",description:"the rate 4.3"
},
{
    pro_name:"tv",brand:"SONY",cost:40000,size:"15inch",p_img:"image/SONY.jpg",description:"the rate 4.3"
},
{
    pro_name:"tv",brand:"TCL",cost:40000,size:"15inch",p_img:"image/TCL.jpg",description:"the rate 4.3"
},{
    pro_name:"fridge",brand:"samsung",cost:50000,size:"15inch",p_img:"image/fridge.jpg",description:"the rate 4.1"
},{
    pro_name:"fridge",brand:"LG",cost:50000,size:"15inch",p_img:"image/LG.jpg",description:"the rate 4.1"
},{
    pro_name:"fridge",brand:"samsung",cost:50000,size:"15inch",p_img:"image/fridge.jpg",description:"the rate 4.1"
},{
    pro_name:"fridge",brand:"haier",cost:50000,size:"15inch",p_img:"image/haier.jpg",description:"the rate 4.1"
},{
    pro_name:"fridge",brand:"BOSCH",cost:50000,size:"15inch",p_img:"image/bosch.jpg",description:"the rate 4.1"
},
{
    pro_name:"AC",brand:"samsung",cost:70000,p_img:"image/ac.jpg",description:"the rate 4.5"
},
{
    pro_name:"AC",brand:"LG",cost:70000,p_img:"image/LG ac.jpg",description:"the rate 4.5"
},{
    pro_name:"AC",brand:"whirlpool",cost:70000,p_img:"image/whirlpool ac.jpg",description:"the rate 4.5"
},{
    pro_name:"AC",brand:"voltas",cost:70000,p_img:"image/voltas.jpg",description:"the rate 4.5"
},
{
    pro_name:"AC",brand:"samsung",cost:70000,p_img:"image/ac.jpg",description:"the rate 4.5"}
]
document.getElementById("pro").addEventListener('click',()=>{
    document.getElementById("p1").innerHTML=product.map((prod)=>{
        return (`<br> product_name:${prod.pro_name} <br> brand_name:${prod.brand} <br> cost:${prod.cost}<br> <img src="${prod.p_img}" width="120px">  <br> descriptin:${prod.description}`)
    }).join("")
})
let array_fill=product.filter((prodfil)=>prodfil.pro_name=="fridge")
document.getElementById("frid").addEventListener('click',()=>{

    document.getElementById("p1").innerHTML=array_fill.map((prod)=>{
        return (`<br> <button onClick="addfri()">ushift yo add the product</button><br>product_name:${prod.pro_name} <br> brand_name:${prod.brand} <br> cost:${prod.cost}<br> <img src="${prod.p_img}" width="120px">  <br> descriptin:${prod.description}`)
    }).join("");
})
let array_ac=product.filter((prodfil)=>prodfil.pro_name=="AC")
document.getElementById("ac").addEventListener('click',()=>{
    document.getElementById("p1").innerHTML=array_ac.map((prod)=>{
        return (`<br> product_name:${prod.pro_name} <br> brand_name:${prod.brand} <br> cost:${prod.cost}<br> <img src="${prod.p_img}" width="120px">  <br> descriptin:${prod.description}`)
    }).join("");
})

let array_tv=product.filter((prodfil)=>prodfil.pro_name=="tv")
document.getElementById("tv").addEventListener('click',()=>{
    document.getElementById("p1").innerHTML=array_tv.map((prod)=>{
            return (`<br><button onClick="rrrr()"> Add product</button> product_name:${prod.pro_name} <br> brand_name:${prod.brand} <br> cost:${prod.cost}<br> <img src="${prod.p_img}" width="120px">  <br> descriptin:${prod.description}`)
    }).join("");
})
//push operation
let rrrr= ()=>{
let produadd={
    pro_name:"tv",brand:"samsungled",cost:140000,size:"15inch",p_img:"image/tv.jpg",description:"the rate 4.3"
}
array_tv.push(produadd);
console.log(product);

document.getElementById("p1").innerHTML=array_tv.map((prod)=>{
    return (`<br> product_name:${prod.pro_name} <br> brand_name:${prod.brand} <br> cost:${prod.cost}<br> <img src="${prod.p_img}" width="120px">  <br> descriptin:${prod.description}`)
}).join("");
}

let addfri=()=>{
let friobje={ pro_name:"fridge",
brand:"samsungultra",
cost:50000,
size:"80 inch",
p_img:"image/fridge.jpg",
description:"the rate 4.1"

}
array_fill.unshift(friobje);
console.log(array_fill);
document.getElementById("p1").innerHTML=array_fill.map((prod)=>{
    return (`<br>product_name:${prod.pro_name} <br> brand_name:${prod.brand} <br> cost:${prod.cost}<br> <img src="${prod.p_img}" width="120px">  <br> descriptin:${prod.description}`)
}).join("");

}

/*arr=["apple","orage","bana"]

let mapex=arr.map((ob)=>{
    return `${ob} <button>sdasd</button`
})
document.write(mapex)*/