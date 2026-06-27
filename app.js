let db;fetch('data/menu.json').then(r=>r.json()).then(d=>{db=d;draw(d.categories);});
function draw(c){cats.innerHTML='';list.innerHTML='';
c.forEach(cat=>{let x=document.createElement('div');x.className='card';x.textContent=cat.name;
x.onclick=()=>{list.innerHTML='<h2 style="padding:20px">'+cat.name+'</h2>';
cat.items.forEach(i=>list.innerHTML+=`<div class='food'>${i.name}<span style='float:left;color:#D4AF37'>${i.price}</span></div>`)}
cats.appendChild(x);});}
search.oninput=e=>{const q=e.target.value.trim();draw(db.categories.filter(c=>c.name.includes(q)||c.items.some(i=>i.name.includes(q))))}
menuBtn.onclick=()=>window.scrollTo({top:300,behavior:'smooth'});