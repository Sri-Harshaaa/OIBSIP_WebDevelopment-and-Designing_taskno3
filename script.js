function convertTemp() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const from = document.getElementById('unitFrom').value;
  const to = document.getElementById('unitTo').value;
  let result = 0;

  if (isNaN(temp)) {
    document.getElementById('result').innerText = 'Please enter a valid temperature!';
    return;
  }

  // Convert input to Celsius first
  switch(from) {
    case 'F': result = (temp - 32) * 5/9; break;
    case 'K': result = temp - 273.15; break;
    default: result = temp;
  }

  // Convert from Celsius to target
  switch(to) {
    case 'F': result = (result * 9/5) + 32; break;
    case 'K': result = result + 273.15; break;
  }

  document.getElementById('result').innerText = `Result: ${result.toFixed(2)} °${to}`;
}
