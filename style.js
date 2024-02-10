function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const resultElement = document.getElementById('result');
  
    if (isNaN(celsiusInput.value)) {
      resultElement.innerText = 'Please enter a valid number.';
      return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
  
    resultElement.innerText = `Result: ${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
  }
