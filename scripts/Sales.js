import { FoodTruck } from "./FoodTruck.js";

export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases")
    const sales = await response.json ()


 // Fetch all menu items
 const response1 = await fetch("http://localhost:8088/entrees")
 const entrees = await response1.json();
 
 const response2 = await fetch("http://localhost:8088/vegetables")
 const vegetables = await response2.json();
 
 const response3 = await fetch("http://localhost:8088/sides")
 const sides = await response3.json();



    let salesDivs = "<h2>Monthly Sales</h2>"
    
    salesDivs += sales.map(sale => {
        
 // Find the selected menu items
 const selectedEntree = entrees.find(entree => entree.id === parseInt(sale.entreeId));
 const selectedVegetable = vegetables.find(vegetable => vegetable.id === parseInt(sale.vegetableId));
 const selectedSide = sides.find(side => side.id === parseInt(sale.sideId))

// Calculate total cost
const totalCost = selectedEntree.price + selectedVegetable.price + selectedSide.price;




        return `<p>Receipt #${sale.id} = $${totalCost.toFixed(2)}</p>`;
    }).join("");

    return salesDivs;
};

// Listen for "OrderMade" event to update sales
document.addEventListener("OrderMade", async () => {
    const mainContainer = document.querySelector("#container");
    mainContainer.innerHTML = await FoodTruck(); // Re-render the entire UI including new sales
})