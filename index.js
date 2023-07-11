const wrapper = document.querySelector('.sliderwrapper');
const menuitems = document.querySelectorAll('.menuitem');
const products = [
    {
    id: 1,
    title: "AIR FORCE",
    price: 1400,
    colors: [
        {
            code: "black",
            img: "images/air.png"
        },
        {
            code: "darkblue",
            img: "images/air2.png"
        }
    ]
},

{
    id: 2,
    title : "ULTRA",
    price : 1100,
    colors : [
        {
            code:"lightgray",
            img:"images/blazer.png",

        },
        {
            code:"green",
            img:"images/blazer2.png",

        },
    ],
},


{
    id: 3,
    title : "FORCE",
    price : 1500,
    colors : [
        {
            code:"gray",
            img:"images/hippie.png",

        },
        {
            code:"black",
            img:"images/hippie2.png",

        },
    ],
},

{
    id: 4,
    title : "JORDAN",
    price : 1800,
    colors : [
        {
            code:"lightgray",
            img:"images/jordan.png",

        },
        {
            code:"green",
            img:"images/jordan2.png",

        },
    ],
},

{
    id: 5,
    title : "POWER",
    price : 1000,
    colors : [
        {
            code:"black",
            img:"images/crater.png",

        },
        {
            code:"lightgray",
            img:"images/crater2.png",

        },
    ],
}


];
let choosenproduct = products[0]
const currentproductimg=document.querySelector(".productimg")
const currentproducttitle=document.querySelector(".producttitle")
const currentproductprice=document.querySelector(".productprice")

const currentproductcolors=document.querySelectorAll(".color")
const currentproductsizes=document.querySelectorAll(".size")
menuitems.forEach((item, index) => {
    item.addEventListener('click', () => {


        wrapper.style.transform = `translateX(${-100 * index}vw)`
        choosenproduct=products[index]
        currentproducttitle.textContent=choosenproduct.title
        currentproductprice.textContent="$"+choosenproduct.price
        currentproductimg.src=choosenproduct.colors[0].img
        currentproductcolors.forEach((color,index)=>{
            color.style.backgroundColor = choosenproduct.colors[index].code

        });
    });
});
currentproductcolors.forEach((color,index)=>{
    color.addEventListener("click",() =>{
        currentproductimg.src=choosenproduct.colors[index].img

    });
});
currentproductsizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentproductsizes.forEach((size)=>{
            size.style.backgroundColor="white"
        size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})
const productbutton=document.querySelector(".productbutton")
const paymment=document.querySelector(".payment")
const close=document.querySelector(".close")

productbutton.addEventListener("click",()=>{
    paymment.style.display="flex"
})
close.addEventListener("click",()=>{
    paymment.style.display="none"
})



