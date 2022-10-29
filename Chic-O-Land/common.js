
// Get the session variable called currentBasket from local storage
// As we converted an array to string, we need to change it back to an array here
var items = JSON.parse(sessionStorage.getItem("currentBasket"));

// If there is no session variable create an empty array
if (items === null) {
    items = [];
}

updatePriceTotal();

function updatePriceTotal() {
    // Calculate the total price from the items array
    let totalPrice = 0;
    items.forEach(function(item) {
        totalPrice = totalPrice + parseFloat(item[2]);
        document.getElementById("totalPrice").innerHTML = parseFloat(totalPrice).toFixed(2);
    });

    if (items.length === 0) {
        document.getElementById("totalPrice").innerHTML = "0";
    }
}

document.getElementById("cancelOrderButton").addEventListener("click", function() {
    // empty the items list
    // remove session variable
    // update total price on screen
    items = [];
    sessionStorage.removeItem('currentBasket');
    updatePriceTotal();
});

/**
 * SELECT LANGUAGE POPUP LISTENERS
 */

// Hide the selectLanguagePopup
document.getElementById('selectLanguagePopup').style.display = 'none';

document.getElementById("showSelectLanguagePopupButton").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById('selectLanguagePopup').style.display = 'block';
});

document.getElementById("selectLanguageButton").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById('selectLanguagePopup').style.display = 'none';
});


document.getElementById("closeSelectLanguagePopup").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById('selectLanguagePopup').style.display = 'none';
});
