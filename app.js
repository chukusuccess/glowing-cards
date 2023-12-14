"use strict";

const cardHolder = document.getElementById("card-holder");

// ------------ CARDS DATA ------------ //
let cards = [
  {
    id: 1,
    plan: "basic",
    currency: "$",
    price: 9.99,
    benefits: [
      "Access to standard workouts and nutrition plans",
      "Email support",
    ],
    buttonText: "get started",
  },
  {
    id: 2,
    plan: "pro",
    currency: "$",
    price: 399.99,
    benefits: [
      "Access to advanced workouts and nutrition plans",
      "Priority Email support",
      "Exclusive access to live Q&A sessions",
    ],
    buttonText: "upgrade to pro",
  },
  {
    id: 3,
    plan: "ultimate",
    currency: "$",
    price: 999.99,
    benefits: [
      "Access to premium workouts and nutrition plans",
      "24/7 Priority support",
      "1-on-1 virtual coaching sessions every month",
      "Exclusive content and early access to new features",
    ],
    buttonText: "go ultimate",
  },
  //  ADD MORE ITEMS
];

// ------------ CREATE CARDS ------------ //
const createCards = async (cards) => {
  try {
    cards.map((card) => {
      cardHolder.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card-box${card.id}">
        <div id="card${card.id}" class="card">
          <div class="spacing">
            <p>${card.plan}</p>
            <p class="price">${card.currency} ${card.price}</p>
            <div class="text-content">
              ${card.benefits
                .map((benefit) => {
                  return `<p>&check; ${benefit}</p>`;
                })
                .join("")}
            </div>
          </div>
          <div class="btn-holder${card.id}">
            <button id="btn${card.id}" class="btn">${card.buttonText}</button>
          </div>
        </div>
      </div>
      `
      );
    });
  } catch (error) {
    console.log(error);
    alert("Oops! failed to create cards \n Please refresh page.");
  }
};

// ------------ ADD PAGE LOAD LISTENER ------------ //
window.addEventListener("load", function () {
  createCards(cards);

  // ------------ GET DOM ELEMENTS AFTER PAGE LOADS ------------ //
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const card3 = document.getElementById("card3");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  // ------------ APPLY GLOW EFFECT ------------ //
  function addGlowEffect(element, color) {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const gradientX = (mouseX / element.clientWidth) * 100;
      const gradientY = (mouseY / element.clientHeight) * 100;

      element.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, transparent 20%, ${color} 80%)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.background = color;
    });
  }

  // ------------ CALL FUNCTION WITH ELEMENTS AND COLORS ------------ //
  addGlowEffect(card1, "#262626");
  addGlowEffect(card2, "#262626");
  addGlowEffect(card3, "#262626");
  addGlowEffect(btn1, "#000");
  addGlowEffect(btn2, "#000");
  addGlowEffect(btn3, "#000");
});
