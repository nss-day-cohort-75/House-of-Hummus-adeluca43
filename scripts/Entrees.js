export const Entrees = async () => {
  // Fetch entrees from the database
  const response = await fetch("http://localhost:8088/entrees");
  const entrees = await response.json();

  let html = `<h3>Choose Your Entrée</h3>`;

  // Generate radio buttons for each entree
  html += entrees.map((entree) => {
      return `
            <div>
                <input type="radio" name="entree" value="${entree.id}"/>${entree.name} ($${entree.price.toFixed(2)})
            </div>
        `;
    })
    .join("");

  return html;
};
