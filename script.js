function convertTemperature() {
  const inputTemp = document.getElementById("inputTemp").value;
  const unit = document.querySelector('input[name="unit"]:checked');
  const resultDiv = document.getElementById("result");

  if (!inputTemp || isNaN(inputTemp)) {
    resultDiv.textContent = "❗ Please enter a valid number.";
    return;
  }

  if (!unit) {
    resultDiv.textContent = "❗ Please select a temperature unit.";
    return;
  }

  const temp = parseFloat(inputTemp);
  let result = "";

  if (unit.value === "Celsius") {
    const fahrenheit = (temp * 9/5) + 32;
    const kelvin = temp + 273.15;
    result = `${temp}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
  } else if (unit.value === "Fahrenheit") {
    const celsius = (temp - 32) * 5/9;
    const kelvin = (temp - 32) * 5/9 + 273.15;
    result = `${temp}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
  } else if (unit.value === "Kelvin") {
    const celsius = temp - 273.15;
    const fahrenheit = (temp - 273.15) * 9/5 + 32;
    result = `${temp}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
  }

  resultDiv.textContent = result;
}
