const categories=[
{name:'🍕 پیتزا'},
{name:'🍔 برگر'},
{name:'🥪 ساندویچ'},
{name:'🍗 سوخاری'},
{name:'🌯 دونر'},
{name:'🍝 پاستا'},
{name:'🥗 سالاد'},
{name:'🥤 نوشیدنی'}
];
const featured=['پیتزا مخصوص مادوتا','شف برگر','هات داگ ویژه'];
const c=document.getElementById('categoryList');
const f=document.getElementById('featuredFoods');
if(c){categories.forEach(x=>{let d=document.createElement('div');d.className='card';d.textContent=x.name;d.onclick=()=>alert('صفحه '+x.name+' در مرحله بعد ساخته می‌شود.');c.appendChild(d);});}
if(f){featured.forEach(x=>{let d=document.createElement('div');d.className='card';d.textContent=x;f.appendChild(d);});}
