import { FoodTruck, selectionMade } from "./FoodTruck.js";
import { placeOrder } from "./TransientState.js";

const mainContainer = document.querySelector("#container") //main display area, where webpage is dynamically updated

const renderAllHTML = async () => {
  mainContainer.innerHTML = await FoodTruck();
};


export const purchaseMade = () => {
  document.addEventListener("click", async (event) => {
    if (event.target.id === "purchase") {
      await placeOrder(); // calls placeorder from transientState when button is clicked
    }
  });
};
selectionMade() // calls function that listens for user selection of radio buttons
purchaseMade() // calls function that listens for purchase clicks
renderAllHTML() // loads all user interface into the container
