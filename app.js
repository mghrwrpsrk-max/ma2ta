const menuData = {

pizza: [
    { name: "پیتزا مخصوص مادوتا", price: "419,000 تومان" },
    { name: "پیتزا رست بیف", price: "459,000 تومان" },
    { name: "پیتزا چهار فصل", price: "479,000 تومان" },
    { name: "پیتزا سوجوک", price: "459,000 تومان" }
],

burger: [
    { name: "شف برگر", price: "299,000 تومان" },
    { name: "دبل برگر", price: "359,000 تومان" },
    { name: "چیز برگر", price: "279,000 تومان" }
],

sandwich: [
    { name: "هات داگ ویژه", price: "249,000 تومان" },
    { name: "ساندویچ رست بیف", price: "339,000 تومان" }
],

fried: [
    { name: "سوخاری ۲ تکه", price: "289,000 تومان" },
    { name: "سوخاری ۳ تکه", price: "349,000 تومان" }
],

pasta: [
    { name: "آلفردو", price: "319,000 تومان" },
    { name: "پاستا گوشت", price: "349,000 تومان" }
],

salad: [
    { name: "سالاد سزار", price: "229,000 تومان" },
    { name: "سالاد فصل", price: "149,000 تومان" }
],

fries: [
    { name: "سیب زمینی ساده", price: "129,000 تومان" },
    { name: "سیب زمینی ویژه", price: "179,000 تومان" }
],

drink: [
    { name: "نوشابه", price: "35,000 تومان" },
    { name: "دوغ", price: "39,000 تومان" }
]

};

const menuItems = document.getElementById("menuItems");
const categoryTitle = document.getElementById("categoryTitle");
const menuBtn = document.getElementById("menuBtn");

menuBtn.onclick = () => {

document.getElementById("categories").scrollIntoView({
behavior:"smooth"
});

};

document.querySelectorAll(".category").forEach(btn=>{

btn.addEventListener("click",()=>{

const category = btn.dataset.category;

showCategory(category,btn.innerText);

});

});

function showCategory(category,title){

categoryTitle.innerText = title;

menuItems.innerHTML = "";

menuData[category].forEach(item=>{

menuItems.innerHTML += `

<div class="card">

<div class="card-content">

<h3>${item.name}</h3>

<div class="price">

${item.price}

</div>

</div>

</div>

`;

});

document.getElementById("menuSection").scrollIntoView({

behavior:"smooth"

});

}
