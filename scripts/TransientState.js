const selectedMeal = {
  entreeId: "0",
  vegetableId: "0",
  sideId: "0",
}

// function to store the selected entree choices
//updates the entreeId property in selectedMeal with the chosen entree ID from the entree that is selected in foodtruck
export const setEntreeChoice = (entreeId) => {
  selectedMeal.entreeId = entreeId;
}

export const setVegetableChoice = (vegetableId) => {
  selectedMeal.vegetableId = vegetableId;
}

export const setSideChoice = (sideId) => {
  selectedMeal.sideId = sideId;
}



// runs after the button is clicked, retrieves user selections from selectedMeal, 
// converts to numbers and send the order to the API
export const placeOrder = async () => {
  const purchasedCombo = {
    entreeId: parseInt(selectedMeal.entreeId), // storing as numbers so IDs match is database 
    vegetableId: parseInt(selectedMeal.vegetableId),
    sideId: parseInt(selectedMeal.sideId),
  };

  await fetch("http://localhost:8088/purchases", {
    method: "POST", // specifies sending new data to create new purchase
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(purchasedCombo), // coverts purchasedCombo object into a JSON formatted string
  });

  // dispatches a custom event called OrderMade to the document
  //  ( tells the app to update with the new order info on display)
  document.dispatchEvent(new CustomEvent("OrderMade"));
};
