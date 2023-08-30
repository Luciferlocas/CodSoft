let displayValue = ""; 

//display-------------------------------------------------------

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

//clear button--------------------------------------------------

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

//calculate button----------------------------------------------

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

//backspace button----------------------------------------------

function appendToDisplay(value) {
  if (value === "←") {
    displayValue = displayValue.slice(0, -1); 
  } else {
    displayValue += value;
  }
  document.getElementById("display").value = displayValue;
}
