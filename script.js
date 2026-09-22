// Footer me current year set karo
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Coffee card banane ka helper function
function createCoffeeCard(item) {
  return `
    <div class="coffee-card">
      <img src="${item.img}" alt="${item.name}">
      <div class="coffee-card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="price">₹${item.price}</div>
      </div>
    </div>
  `;
}

// Home page: pehle 3 items dikhao
const coffeeGrid = document.getElementById("coffee-grid");
if (coffeeGrid && typeof coffeeItems !== "undefined") {
  coffeeGrid.innerHTML = coffeeItems
    .slice(0, 3)
    .map(createCoffeeCard)
    .join("");
}

// Menu page: sare items dikhao
const menuGrid = document.getElementById("menu-grid");
if (menuGrid && typeof coffeeItems !== "undefined") {
  menuGrid.innerHTML = coffeeItems.map(createCoffeeCard).join("");
}
