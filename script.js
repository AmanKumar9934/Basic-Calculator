function appendValue(val) {
    document.getElementById('display').value += val;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    try {
      const input = document.getElementById('display').value;
      const result = eval(input); // Use with caution
      document.getElementById('display').value = result;
    } catch (error) {
      alert('Invalid expression');
      clearDisplay();
    }
  }