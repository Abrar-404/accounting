document.getElementById('btn-calculate').addEventListener('click', function () {
  const incomeField = getInputValue('income');

  const food = getInputValue('food-box');
  const rent = getInputValue('rent-box');
  const clothes = getInputValue('clothes-box');

  const totalExpenses = food + rent + clothes;

  const balance = incomeField - totalExpenses;

  setInputFieldText('expenses-area', totalExpenses);

  setInputFieldText('balance-area', balance);


  document.getElementById('btn-save').addEventListener('click', function () {
  const incomeField = getInputValue('income');
  const savings = getInputValue('discount-amount');
  const discount = (savings / 100) * incomeField;

    const remainingBalance = balance - discount;
  
    setInputFieldText('saving-amount', discount);
    setInputFieldText('remaining-balance', remainingBalance);
})

})

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldText = inputField.value;
  const input = parseFloat(inputFieldText);
  return input;
}

function setInputFieldText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}



