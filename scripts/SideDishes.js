import { setSideChoice } from "./TransientState.js";

export const Sides = async () => {
  // Fetch side dishes from the database
  const response = await fetch("http://localhost:8088/sides");
  const sides = await response.json();

  let html = `<h3>Choose Your Side Dish</h3>`;

  // Generate radio buttons for each side dish
  html += sides
    .map((side) => {
      return `
            <div>
                <input type="radio" name="side" value="${side.id}"/>${
        side.title
      } ($${side.price.toFixed(2)})
            </div>
        `;
    })
    .join("");

  return html;
};

export const handleSideSelection = () => {
  document.addEventListener("change", (event) => {
    if (event.target.name === "side") {
      setSideChoice(event.target.value); // Store side selection
    }
  });
};
