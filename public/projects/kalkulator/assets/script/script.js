const calculator = document.getElementById("calculator");

const valueNumber = (value) => {
  calculator.value += value;
};

const clearCalculate = () => {
  calculator.value = "";
};

const calculateNumber = () => {
  calculator.value = eval(calculator.value);
};

const deleteNumber = () => {
  calculator.value = calculator.value.substring(0, calculator.value.length - 1);
};
