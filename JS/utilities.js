function getTextElementValue(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneString);

  return currentPhoneTotal;
}
function setTextElement(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}
// Calculate Total
function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValue("phone-total");
  const currentCaseTotal = getTextElementValue("case-total");

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElement("sub-total", currentSubTotal);

  // Calculate Tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElement("tax-amount", taxAmount);

  // Calculate Final Amount
  const finalAmount = currentSubTotal + taxAmount;
  setTextElement("final-total" , finalAmount);

}

