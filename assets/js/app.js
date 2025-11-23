// Jahr im Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Such-Button (später echte Produktsuche)
document.getElementById("searchBtn").addEventListener("click", () => {
  const term = document.getElementById("searchInput").value.trim();
  if (term) {
    alert("Produktsuche nach: " + term + " (kommt später richtig)");
  }
});

// Login-Modal öffnen / schließen
const loginModal = document.getElementById("loginModal");
const openLoginModalBtn = document.getElementById("openLoginModal");
const closeLoginModalBtn = document.getElementById("closeLoginModal");
const loginBtnHeader = document.getElementById("loginBtn");

function openLoginModal() {
  loginModal.classList.remove("hidden");
}

function closeLoginModal() {
  loginModal.classList.add("hidden");
}

if (openLoginModalBtn) openLoginModalBtn.addEventListener("click", openLoginModal);
if (loginBtnHeader) loginBtnHeader.addEventListener("click", openLoginModal);
if (closeLoginModalBtn) closeLoginModalBtn.addEventListener("click", closeLoginModal);

loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    closeLoginModal();
  }
});

// Platzhalter: später Produkte aus data/products.json laden
// fetch('data/products.json')
//   .then(res => res.json())
//   .then(products => {
//     renderProducts(products);
//   });

// Dummy-Produkt zum Test
const demoProducts = [
  {
    id: "hoodie-black-001",
    name: "LA DUA Hoodie Schwarz",
    price: 49.9,
    image: "https://via.placeholder.com/400x500?text=LA+DUA+Hoodie",
  },
  {
    id: "tshirt-white-001",
    name: "LA DUA T-Shirt Weiß",
    price: 29.9,
    image: "https://via.placeholder.com/400x500?text=LA+DUA+T-Shirt",
  }
];

renderProducts(demoProducts);

function renderProducts(products) {
  const container = document.getElementById("productGrid");
  if (!container) return;

  container.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.price.toFixed(2)} €</div>
      <div class="product-actions">
        <button>Details</button>
        <button>Teilen</button>
      </div>
    `;
    container.appendChild(card);
  });
}
