import { Sales } from "./Sales.js";
import { Entrees } from "./Entrees.js";
import { Veggies } from "./Vegetables.js";
import { Sides } from "./SideDishes.js";
import { setEntreeChoice,setVegetableChoice,setSideChoice,} from "./TransientState.js";

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

    `
};
//function to handle the user selections
export const selectionMade = () => {
  document.addEventListener("change", (event) => {  //listens for change event on entire document
    if (event.target.name === "entree") {           // if changed element is a radio button with the name = entree
      setEntreeChoice(event.target.value)           // calls SetEntreeChoice and passes the selected entrees's value
    } else if (event.target.name === "vegetable") {
      setVegetableChoice(event.target.value)
    } else if (event.target.name === "side") {
      setSideChoice(event.target.value)
    }
  })
}
