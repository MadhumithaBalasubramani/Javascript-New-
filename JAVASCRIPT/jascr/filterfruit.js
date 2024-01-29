let fruit=[
{fruit_name:"apple",quantity:"1kg",cost:150},
{fruit_name:"apple",quantity:"2kg",cost:250},
{fruit_name:"apple",quantity:"3kg",cost:400},
{fruit_name:"orange",quantity:"1kg",cost:100},
{fruit_name:"orange",quantity:"2kg",cost:150},
{fruit_name:"orange",quantity:"3kg",cost:300},
{fruit_name:"pomegranate",quantity:"1kg",cost:200},
{fruit_name:"pomegranate",quantity:"2kg",cost:300},
{fruit_name:"pomegranate",quantity:"3kg",cost:400}
]
document.getElementById("fruit").addEventListener('click',()=>{
    document.getElementById("div").innerHTML=fruit.map((fru)=>{
        return `<br> fruit_name:${fru.fruit_name} <br> quantity:${fru.quantity} <br> cost:${fru.cost}`
    })
})
let apple_filter=fruit.filter((frufil)=>frufil.fruit_name=="apple")
document.getElementById("applee").addEventListener('click',()=>{
    document.getElementById("div").innerHTML=apple_filter.map((fru)=>{
        return `<br> fruit_name:${fru.fruit_name} <br> quantity:${fru.quantity} <br> cost:${fru.cost}`
    })
})
let pomegranate_filter=fruit.filter((frufil)=>frufil.fruit_name=="pomegranate")
document.getElementById("pom").addEventListener('click',()=>{
    document.getElementById("div").innerHTML=pomegranate_filter.map((fru)=>{
        return `<br> fruit_name:${fru.fruit_name} <br> quantity:${fru.quantity} <br> cost:${fru.cost}`
    })
})
let orange_filter=fruit.filter((frufil)=>frufil.fruit_name=="orange")
document.getElementById("org").addEventListener('click',()=>{
    document.getElementById("div").innerHTML=orange_filter.map((fru)=>{
        return `<br> fruit_name:${fru.fruit_name} <br> quantity:${fru.quantity} <br> cost:${fru.cost}`
    })
})
let frupush={fruit_name:"apple",quantity:"5kg",cost:500}
fruit.push(frupush);
console.log(fruit);
fruit.pop(frupush);
console.log(fruit);
fruit.shift(frupush);
console.log(fruit);
fruit.unshift(frupush);
console.log(fruit);

