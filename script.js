// ================================
// 1. DEMO SHOPPING BAG
// ================================

let cartCount = 0;
const cart = [];

const countElement = document.getElementById("cart-count");
const cartSummary = document.getElementById("cart-summary");

function updateBag() {
  countElement.textContent = cartCount;

  if (cartCount === 0) {
    cartSummary.textContent = "Your bag is empty for now.";
  } else {
    cartSummary.textContent =
      `${cartCount} item(s) in your demo bag: ${cart.join(", ")}.`;
  }
}

// Add products to the demo bag

document.querySelectorAll("[data-add]").forEach((button) => {

  button.addEventListener("click", () => {

    cart.push(button.dataset.add);
    cartCount++;

    updateBag();

    button.textContent = "Added ✓";

    window.setTimeout(() => {
      button.textContent = "Add to demo bag";
    }, 1300);

  });

});


// ================================
// 2. SOLUNA PRODUCT QUIZ
// ================================

const quizButton = document.getElementById("quiz-button");

const preference = document.getElementById("preference");

const quizResult = document.getElementById("quiz-result");

const quizMatches = {

  tea: [
    "Transparent herbal teas",
    "Explore the visible-herb tea sachet concept.",
    "#tea-range"
  ],

  capsules: [
    "Botanical capsule blends",
    "Discover the seven SOLUNA capsule blend concepts.",
    "#capsule-range"
  ],

  gift: [
    "The SOLUNA Gift Box",
    "A thoughtful presentation with tea and a cup.",
    "#gift"
  ],

  machine: [
    "The SOLUNA machine",
    "Discover the machine and capsule preparation concept.",
    "#machine"
  ]

};

quizButton.addEventListener("click", () => {

  const match = quizMatches[preference.value];

  quizResult.innerHTML = `
    <strong>Your SOLUNA match: ${match[0]}</strong>

    <p>${match[1]}</p>

    <a class="text-link" href="${match[2]}">
      Discover more ↗
    </a>
  `;

});


// ================================
// 3. DEMO ORDER FORM
// ================================

document.getElementById("order-form").addEventListener("submit", (event) => {

  event.preventDefault();

  if (cartCount === 0) {

    document.getElementById("order-message").textContent =
      "Please add an item to your demo bag first.";

    return;

  }

  const name = document.getElementById("customer-name").value.trim();

  const method = document.getElementById("payment-method").value;

  document.getElementById("order-message").textContent =
    `Thank you, ${name}! Your demo order is ready (${method}). No real payment or order has been made.`;

});


// ================================
// 4. MOBILE NAVIGATION
// ================================

const menuToggle = document.getElementById("menu-toggle");

const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {

  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

});

mainNav.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    mainNav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

  });

});