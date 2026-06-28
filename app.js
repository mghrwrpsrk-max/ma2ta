// ===============================
// MA2TA Restaurant
// ===============================

let menu = {};

const menuContainer = document.getElementById("menu-items");
const specialContainer = document.getElementById("special-items");

// خواندن اطلاعات از menu.json
fetch("menu.json")
  .then(res => res.json())
  .then(data => {

    menu = data;

    showSpecial();

  })
  .catch(err => {

    console.log(err);

    menuContainer.innerHTML =
      "<h2>خطا در بارگذاری منو</h2>";

  });

// ===============================
// نمایش غذاهای ویژه
// ===============================

function showSpecial() {

    specialContainer.innerHTML="";

    const special=[];

    Object.keys(menu).forEach(category=>{

        if(menu[category].length){

            special.push(menu[category][0]);

        }

    });

    special.forEach(food=>{

        specialContainer.innerHTML+=`

        <div class="card">

            <div class="card-body">

                <h3>${food.name}</h3>

                <p>پیشنهاد ویژه MA②TA</p>

                <div class="price">${food.price}</div>

                <a class="order-btn">
                مشاهده
                </a>

            </div>

        </div>

        `;

    });

}

// ===============================
// نمایش هر دسته
// ===============================

document.querySelectorAll(".category")

.forEach(card=>{

card.onclick=()=>{

const category=card.dataset.category;

showCategory(category);

};

});

function showCategory(category){

menuContainer.innerHTML="";

if(!menu[category]) return;

menu[category].forEach(food=>{

menuContainer.innerHTML+=`

<div class="card">

<div class="card-body">

<h3>${food.name}</h3>

<p>

تازه • خوشمزه • مخصوص MA②TA

</p>

<div class="price">

${food.price}

</div>

<a class="order-btn">

مشاهده

</a>

</div>

</div>

`;

});

document.getElementById("menu")

.scrollIntoView({

behavior:"smooth"

});

}

// ===============================
// دکمه بازگشت بالا
// ===============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
