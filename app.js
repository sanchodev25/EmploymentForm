const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset_val");

//reset, send, validate
const resetValues = (e) => {
  e.preventDefault();
  document.querySelector("#first_name").value = "";
  document.querySelector("#pay_rate").value = "0.00";
  document.querySelector("#hours").value = "0.00";
  document.querySelector("#overtime").value = "0.00";
};

const getValues = (e) => {
  e.preventDefault();
  let hourlyPayRate = document.querySelector("#pay_rate").value;
  let hoursWorked = document.querySelector("#hours").value;
  let hoursOvertime = document.querySelector("#overtime").value;
  console.log(hourlyPayRate);
};

submitBtn.addEventListener("click", getValues);
resetBtn.addEventListener("click", resetValues);
