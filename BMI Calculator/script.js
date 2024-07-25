function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');
  
    if (height && weight) {
      const bmi = weight / (height / 100) ** 2;
      const classification = getClassification(bmi);
  
      result.innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${classification})`;
      result.style.opacity = '1';
      result.style.transform = 'translateY(0)';
    } else {
      result.innerHTML = 'Please enter both height and weight';
      result.style.opacity = '1';
      result.style.transform = 'translateY(0)';
    }
  }
  
  function getClassification(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }
  
  function handleKeyPress(event, nextElementId) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (nextElementId === 'calculate') {
        calculateBMI();
      } else {
        document.getElementById(nextElementId).focus();
      }
    }
  }
  