/*  
AUTHORS: Susanne Jandl & Dana-Monica Vlas
USED TEMPLATE CREATED BY: Müslüm Atas & Mathias Knoll
DESCRIPTION: The following code detects if the PWA is launched as an app or visited as a website.
SOURCE: https://stackoverflow.com/questions/50543163/can-i-detect-if-my-pwa-is-launched-as-an-app-or-visited-as-a-website
LAST CHANGE: 29.12.2023
*/

//Detects if device is on iOS
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if 'install popup notification' should be displayed
if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
}

// save string from selection in selectRestaurant method

document.getElementById('restaurantName').textContent = localStorage.getItem("restaurant_name");


document.getElementById('pizza_link').addEventListener('click', () => {
    window.location.href = "pizza.html";
})

document.getElementById('burger_link').addEventListener('click', () => {
    alert("Leider aufgegessen! Heute gibt es nur noch Pizza und Kaltgetränke!");
})

document.getElementById('salad_link').addEventListener('click', () => {
    alert("Leider aufgegessen! Heute gibt es nur noch Pizza und Kaltgetränke!");
})

document.getElementById('pasta_link').addEventListener('click', () => {
    alert("Leider aufgegessen! Heute gibt es nur noch Pizza und Kaltgetränke!");
})

document.getElementById('dessert_link').addEventListener('click', () => {
    alert("Leider aufgegessen! Heute gibt es nur noch Pizza und Kaltgetränke!");
})

document.getElementById('colddrinks_link').addEventListener('click', () => {
    window.location.href = "colddrinks.html";
})

document.getElementById('hotdrinks_link').addEventListener('click', () => {
    alert("Leider ausgetrunken! Heute gibt es nur noch Pizza und Kaltgetränke!");
})


function selectRestaurant() {
    var selectedRestaurant = document.getElementById("dropdownRestaurant").value.toString();
    return selectedRestaurant;
}

function goToOverview() {
    var selectedRestaurant = selectRestaurant();
    if(selectRestaurant() == "Restaurant wählen") 
    {
        alert("Bitte wählen Sie ein Restaurant aus!");
    } else {
    localStorage.setItem("restaurant_name", selectRestaurant());
    window.location.href = "overview.html";
    }
}

function add_message() {
var dialog = document.createElement("dialog");
dialog.innerHTML = "This is a message box.";
dialog.show();
}
