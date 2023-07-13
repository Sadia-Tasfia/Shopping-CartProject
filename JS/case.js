/* 
1. add event listener to case plus button
2. get the value inside the case number field
3. convert the number to the integer
4. calculate the new number
5. set the value to the number field
*/ 
 
document.getElementById("btn-case-plus").addEventListener('click', function(){
  const numberField = document.getElementById("number-field");
  const numberString = numberField.value;
  const previousNumber = parseInt(numberString); 

  const newNumber = previousNumber + 1;
  numberField.value = newNumber;
});

document.getElementById("btn-case-minus").addEventListener('click', function(){
  const numberField = document.getElementById("number-field");
  const numberString = numberField.value;
  const previousNumber = parseInt(numberString);
  
  const newNumber = previousNumber - 1;
  numberField.value = newNumber
  
});