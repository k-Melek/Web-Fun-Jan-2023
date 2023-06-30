// REMOVE COOKIE footer when ACCEPTED clicked
function removeCookie() {
    var element = document.querySelector('footer'); 
    element.remove();
}

// ALET on CITY CLICK
function alertWeather(){
    alert("Loading weather report...")
}

// Changing the UNIT based on the option SELECT

function convertTemperature() {
    var selectElement = document.getElementById('select_temp');
    var selectedUnit = selectElement.value;
  
    var tempElements = document.querySelectorAll('.temp div');
  
    tempElements.forEach(function(element) {
      var tempText = element.textContent;
      var temperature = parseInt(tempText);
  
      if (selectedUnit === 'f') {
        temperature = celsiusToFahrenheit(temperature);
        element.textContent = temperature +"°";
      } else {
        temperature = fahrenheitToCelsius(temperature);
        element.textContent = temperature +"°";
      }
    });
  }
  
  function celsiusToFahrenheit(celsius) {
    return Math.floor((celsius * 9/5) + 32);
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return Math.floor((fahrenheit - 32) * 5/9);
  }
  