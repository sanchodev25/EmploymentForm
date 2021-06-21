const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset_val");
const warningMsg = document.querySelector(".warning-msg");
//Not sure if this is set
const rate = 0.75;

//reset, send, validate
const resetValues = (e) => {
  e.preventDefault();
  document.querySelector("#first_name").value = "";
  document.querySelector("#last_name").value = "";
  document.querySelector("#pay_rate").value = "0.00";
  document.querySelector("#hours").value = "0.00";
  document.querySelector("#overtime").value = "0.00";
  document.querySelector(".warning-msg").style.display = "none";
};

const getValues = (e) => {
  e.preventDefault();
  let hourlyPayRate = document.querySelector("#pay_rate").value;
  let hoursWorked = document.querySelector("#hours").value;
  let hoursOvertime = document.querySelector("#overtime").value;
  let firstName = document.querySelector("#first_name").value;
  let lastName = document.querySelector("#last_name").value;

  //Validate the data, if it is invalid let user know
  let isValid = isUserInputValid(
    firstName,
    lastName,
    hourlyPayRate,
    hoursWorked,
    hoursOvertime
  );

  if (isValid) {
    //Calculate data
    //Display it to user
  }

  //exit function
};

//const validate
const isUserInputValid = (
  firstName,
  lastName,
  hourlyPayRate,
  hoursWorked,
  hoursOvertime
) => {
  if (warningMsg.style.display === "block") {
    warningMsg.style.display = "none";
  }
  warningMsg.style.display = "block";
  return false;
};
const grossPay = (payRate, hoursWorked, overtime) => {
  return payRate * hoursWorked + (payRate / 2 + payRate) * overtime;
};

const fica = (grossPay) => {
  return grossPay * rate;
};
const sstax = (grossPay) => {
  return grossPay * rate;
};
const medTax = (grossPay) => {
  return grossPay * rate;
};
const caTax = (grossPay) => {
  return grossPay * rate;
};
const caSDItax = (grossPay) => {
  return grossPay * rate;
};

submitBtn.addEventListener("click", getValues);
resetBtn.addEventListener("click", resetValues);
