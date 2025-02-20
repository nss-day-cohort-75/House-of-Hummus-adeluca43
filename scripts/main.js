import { FoodTruck, initializeEventListeners } from "./FoodTruck.js";

const mainContainer = document.querySelector("#container"); // Main display area

const renderAllHTML = async () => {
  mainContainer.innerHTML = await FoodTruck();
};

// Initialize event listeners
initializeEventListeners();

// Initial render
renderAllHTML();
