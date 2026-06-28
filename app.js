let menuData = {};

const menuItems = document.getElementById("menuItems");
const categoryTitle = document.getElementById("categoryTitle");
const menuBtn = document.getElementById("menuBtn");

fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    menuData = data;
  })
  .catch(error => {
    console.error("خطا در بارگذاری منو:", error);
  });

menuBtn.addEventListener("click", () => {
  document.getElementById("categories").scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelectorAll(".category").forEach(button => {

  button.addEventListener("click", () => {

    const category = button.dataset.category;

    showCategory(category, button.innerText);

  });

});

function showCategory(category, title) {

  categoryTitle.innerText = title;

  menuItems.innerHTML = "";

  if (!menuData[category]) {
    menuItems.innerHTML = "<p>موردی یافت نشد.</p>";
    return;
  }

  menuData[category].forEach(item => {

    menuItems.innerHTML += `
      <div class="card">
        <div class="card-content">
          <h3>${item.name}</h3>
          <div class="price">${item.price}</div>
        </div>
      </div>
    `;

  });

  document.getElementById("menuSection").scrollIntoView({
    behavior: "smooth"
  });

}
