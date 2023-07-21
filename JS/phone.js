function updatePhoneNumber(isIncrease) {
  const phoneField = document.getElementById("phone-field");
  const phoneFieldString = phoneField.value;
  const previousPhone = parseInt(phoneFieldString);

  let newPhone;
  if (isIncrease){
    newPhone = previousPhone +1;
  } else{
    newPhone = previousPhone - 1;
  }

  phoneField.value = newPhone;
  return newPhone;
}

function updatePhoneTotal(newPhone){
  const phoneTotalPrice = newPhone * 1219;
  const phoneTotalElement = document.getElementById("phone-total");
  phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById("btn-phone-plus").addEventListener('click', function(){
  const newPhone = updatePhoneNumber(true);
  updatePhoneTotal(newPhone);
  calculateSubTotal();
});

document.getElementById("btn-phone-minus").addEventListener('click', function(){
  const newPhone = updatePhoneNumber(false);
  updatePhoneTotal(newPhone);
  calculateSubTotal();

});