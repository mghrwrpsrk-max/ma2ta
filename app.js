const menu = {
  categories: [
    {
      id: "pizza",
      title: "🍕 پیتزا"
    },
    {
      id: "burger",
      title: "🍔 برگر"
    },
    {
      id: "sandwich",
      title: "🥪 ساندویچ"
    },
    {
      id: "fried",
      title: "🍗 سوخاری"
    },
    {
      id: "salad",
      title: "🥗 سالاد"
    },
    {
      id: "pasta",
      title: "🍝 پاستا"
    }
  ]
};

const app = document.getElementById("app");

function showHome() {
  app.innerHTML = `
    <div class="logo">
      <h1>MA2TA</h1>
      <p>Fast Food & Restaurant</p>
    </div>

    <div class="categories">
      ${menu.categories.map(cat => `
        <div class="card" onclick="openCategory('${cat.id}')">
          ${cat.title}
        </div>
      `).join("")}
    </div>
  `;
}

function openCategory(id) {
  app.innerHTML = `
    <button onclick="showHome()" class="back-btn">
      بازگشت
    </button>

    <h2>منوی ${id}</h2>

    <div class="card">
      اطلاعات این بخش بعداً از menu.json خوانده می‌شود.
    </div>
  `;
}

showHome();
