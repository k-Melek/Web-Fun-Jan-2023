// Remove the ENTIRE li when EITHER is click (accept / close)

function removeListItem(icon) {
    var listItem = icon.closest("li");
    listItem.remove();
    }

    // Decrement the span text 2 -- on the click of tick icon 
function decrementCounter() {
        var badge = document.getElementById("request_number");
        var count = parseInt(badge.innerText);
        console.log(count);
        count--;
        badge.innerText = count;
    }

    // Increment the span text 2 ++ on the click of + icon 
    function incrementCounter() {
        var badge = document.getElementById("request_number");
        var count = parseInt(badge.innerText);
        count++;
        badge.innerText = count;
    }

    // CHANGE NAME to "Khedher Melek"
    function changeName() {
        var h1Element = document.querySelector(".user-card h1");
        h1Element.textContent = "Khedher Melek";
    }