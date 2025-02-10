import { FoodTruck } from "./FoodTruck.js";

export const Sales = async () => {
  const sales = await fetch("http://localhost:8088/purchases").then((res) =>
    res.json()
  );

  // Fetch all menu items
  const entrees = await fetch("http://localhost:8088/entrees").then((res) =>
    res.json()
  );
  const vegetables = await fetch("http://localhost:8088/vegetables").then(
    (res) => res.json()
  );
  const sides = await fetch("http://localhost:8088/sides").then((res) =>
    res.json()
  );

  let salesDivs = "<h2>Monthly Sales</h2>";

  salesDivs += sales
    .map((sale) => {
      // Find the selected menu items
      const selectedEntree = entrees.find(
        (entree) => entree.id === parseInt(sale.entreeId)
      );
      const selectedVegetable = vegetables.find(
        (vegetable) => vegetable.id === parseInt(sale.vegetableId)
      );
      const selectedSide = sides.find(
        (side) => side.id === parseInt(sale.sideId)
      );

      // Calculate total cost
      const totalCost =
        selectedEntree.price + selectedVegetable.price + selectedSide.price;

      return `<p>Receipt #${sale.id} = $${totalCost.toFixed(2)}</p>`;
    })
    .join("");

  return salesDivs;
};

// Listen for "OrderMade" event to update sales
document.addEventListener("OrderMade", async () => {
  const mainContainer = document.querySelector("#container");
  mainContainer.innerHTML = await FoodTruck(); // Re-render the entire UI including new sales
});
