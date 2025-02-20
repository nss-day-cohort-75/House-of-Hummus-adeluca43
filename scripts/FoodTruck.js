import { Sales } from "./Sales.js";
import { Entrees, handleEntreeSelection } from "./Entrees.js";
import { Veggies, handleVegetableSelection } from "./Vegetables.js";
import { Sides, handleSideSelection } from "./SideDishes.js";
import { placeOrder } from "./TransientState.js";

// initialize event listeners for user selections and purchases
export const initializeEventListeners = () => {
  handleEntreeSelection();
  handleVegetableSelection();
  handleSideSelection();
  purchaseMade(); // Listen for purchase button clicks can these go in FoodTruck.js and where?
};

// declares foodTruck function to gather all HTML content needed to display ( each holds their HTML from their module)
export const FoodTruck = async () => {
  const salesHTML = await Sales();
  const entreesHTML = await Entrees();
  const veggiesHTML = await Veggies();
  const sidesHTML = await Sides();
  // ` in html is starting a template literal to dynamically inject the fetched html later
  return `                                              
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
        ${entreesHTML}
        ${veggiesHTML}
        ${sidesHTML}
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            ${salesHTML}
        </article>

    `;
};
//Listen for purchase combo button clicks
export const purchaseMade = () => {
  document.addEventListener("click", async (event) => {
    if (event.target.id === "purchase") {
      await placeOrder(); // calls placeorder from transientState to submit the order
    }
  });
};

// Listen for "OrderMade" event to update sales
document.addEventListener("OrderMade", async () => {
  const mainContainer = document.querySelector("#container");
  mainContainer.innerHTML = await FoodTruck(); // Re-renders UI when a order is placed
});
