export const Veggies = async () => {
  // Fetch vegetables from the API
  const response = await fetch("http://localhost:8088/vegetables");
  const vegetables = await response.json();

  let html = "<h3>Choose Your Vegetable</h3>";

  // Map the vegetables into radio input buttons
  html += vegetables.map((veggie) => {
    return `
                <div>
                    <input type="radio" name="vegetable" value="${veggie.id}"/>${veggie.type} ($${veggie.price.toFixed(2)})
                </div>
            `
})
    .join("");

  return html;
};
