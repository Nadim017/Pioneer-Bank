const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});
const depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click", function () {
  const depositNumber = inputField("deposit-amount");
  updatedFunction("current-deposit", depositNumber);
  updatedFunction("balance-field", depositNumber);
  document.getElementById("deposit-amount").value = "";
});
const withdrawBtn = document.getElementById("withdraw-button");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = inputField("withdraw-amount");
  updatedFunction("currentWidthdraw", withdrawNumber);
  updatedFunction("balance-field", -1 * withdrawNumber);
  document.getElementById("withdraw-amount").value = "";
});
function updatedFunction(id, number) {
  const spanAmount = document.getElementById(id).innerHTML;
  const spanAmountNumber = parseFloat(spanAmount);
  const totalNumber = spanAmountNumber + number;
  document.getElementById(id).innerHTML = totalNumber;
}

function inputField(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
