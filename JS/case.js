/* 
1. add event listener to case plus button
2. get the value inside the case number field
3. convert the number to the integer
4. calculate the new number
5. set the value to the number field
*/ 

// document.getElementById("btn-case-plus").addEventListener('click', function(){
//   const numberField = document.getElementById("number-field");
//   const numberString = numberField.value;
//   const previousNumber = parseInt(numberString); 

//   const newNumber = previousNumber + 1;
//   numberField.value = newNumber;
// });

// document.getElementById("btn-case-minus").addEventListener('click', function(){
//   const numberField = document.getElementById("number-field");
//   const numberString = numberField.value;
//   const previousNumber = parseInt(numberString);
  
//   const newNumber = previousNumber - 1;
//   numberField.value = newNumber
// });

function updateCaseNumber(isIncrease) {
  const numberField = document.getElementById("number-field");
  const numberString = numberField.value;
  const previousNumber = parseInt(numberString);

  let newNumber;
  if (isIncrease) {
    newNumber = previousNumber + 1;
  } else {
    newNumber = previousNumber - 1;
  }
  numberField.value = newNumber;
  return newNumber;
}

function updateCaseTotalPrice (newNumber) {
  const caseTotalPrice = newNumber * 55;

  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener('click', function(){
  // updateCaseNumber(true);
  const newNumber= updateCaseNumber(true);
  updateCaseTotalPrice(newNumber);
  
});

document.getElementById("btn-case-minus").addEventListener('click', function(){
  /* 
  const caseTotalPrice = newNumber * 55;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
  */

  const newNumber = updateCaseNumber(false);
  updateCaseTotalPrice(newNumber)
});