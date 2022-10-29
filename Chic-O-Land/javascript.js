/****
 * NOTE: This file needs common.js to be included first!!!!
 */

hidePopUps();

// This is a listener we attach it to the element with id addToBasketButton and listen for clicks
// on click we run the function
document.getElementById('addToBasketButton').addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("addToBasketPopup").style.display = "block";
});

document.getElementById('showSelectMealOptionsPopup').addEventListener("click", function(e) {
    e.preventDefault();
    console.log('showSelectMealOptionsPopup');
    // Hide this popup
    document.getElementById("addToBasketPopup").style.display = "none";
    console.log('hide this one');
    // Open meal options popup
    document.getElementById("selectMealOptionsPopup").style.display = "block";
    console.log('show pop up');
});

document.getElementById('noMealAddToBasket').addEventListener("click", function(e) {
    e.preventDefault();
    let price = this.dataset.price;
    let image = this.dataset.image;
    let item = this.dataset.item;
    let newItem = [item,image,price];
    items.push(newItem);
    sessionStorage.setItem("currentBasket", JSON.stringify(items));
    document.getElementById("addToBasketPopup").style.display = "none";
    updatePriceTotal(); // This is found in common.js
});

document.getElementById('closeAddToBasketPopup').addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("addToBasketPopup").style.display = "none";
});

function hidePopUps() {
    document.getElementById('selectMealOptionsPopup').style.display = 'none';
}


document.getElementById('addMealSelectionToBasket').addEventListener("click", function(e) {
    e.preventDefault();

    // Get the selected meal info from the form items
    let mealSizeSelect = document.getElementById("mealSize");
    let mealSize = mealSizeSelect.value;
    let price = mealSizeSelect.options[mealSizeSelect.selectedIndex].dataset.price;
    let mealDrink = document.getElementById("mealDrink").value;
    let item = document.getElementById("mealItem").value + " Size: " + mealSize + " Drink: " + mealDrink;
    let image = document.getElementById("mealImage").value;

    // Add item to basket
    let newItem = [item,image,price];
    items.push(newItem);
    sessionStorage.setItem("currentBasket", JSON.stringify(items));
    document.getElementById("selectMealOptionsPopup").style.display = "none";

    // Show new price total
    updatePriceTotal(); // This is found in common.js
});
