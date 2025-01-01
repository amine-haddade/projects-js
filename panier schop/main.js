// Get references to the cart and the cart item count
const panier = document.getElementById("panier_chop");// div de contien les achat
const cartItemCount = document.querySelector(".panier span");// quntiter des achats

// Initialize total cost variable
let totalCost = 0;// total des achat

// Function to add a product to the cart
function addToPanier(event) {
    //Cette propriété fait référence à l'élément HTML qui a été cliqué
    const button = event.target;
    
    const parentDiv = button.closest(".produit");// check si element click dans une div de class produit
    
    // Check if the parent div is found
    if (!parentDiv) {
        console.error("Parent product div not found.");
        return;
    }

    // Get the product name and price
    const productName = parentDiv.querySelector(".libele_produit").innerText;
    const productPrice = parseFloat(parentDiv.querySelector(".price").innerText);

    // Create a new div for the cart item
    const newDiv = document.createElement("div");
    newDiv.classList.add("panier_produit");

    // Create and append the product name and price elements to the cart item div
    const nameElement = document.createElement("h4");
    nameElement.innerText = productName;
    nameElement.classList.add("name");
    newDiv.appendChild(nameElement);

    const priceElement = document.createElement("h4");
    priceElement.innerText = productPrice;
    priceElement.classList.add("price");
    newDiv.appendChild(priceElement);

    // Create a delete button for removing the cart item
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("fa", "fa-trash");
    deleteButton.addEventListener("click", () => {
        // Remove the cart item and update the cart count and total cost
        panier.removeChild(newDiv);


        updateCartItemCount(-1);
        updateTotalCost(-productPrice);
    });
    newDiv.appendChild(deleteButton);

    // Add the new cart item to the cart
    panier.appendChild(newDiv);

    // Update the cart item count and total cost
    updateCartItemCount(1);
    updateTotalCost(productPrice);
}

// Function to update the cart item count
function updateCartItemCount(change) {
    // Parse the current count, update it, and set the new value
    const currentCount = parseInt(cartItemCount.innerText);
    cartItemCount.innerText = currentCount + change;
}

// Function to update the total cost
function updateTotalCost(change) {
    // Update the total cost and display the new value
    totalCost += change;
    document.getElementById("total").innerText = totalCost.toFixed(2);
}

// Add event listeners to all "add_to_cart" buttons
const addButtons = document.getElementsByClassName("add_to_cart");
for (let button of addButtons) {
    button.addEventListener("click", addToPanier);
}
