const btnConvert = document.getElementById("convert");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

fahrenheit.onchange = function () {
  if (this.value != "" || this.value.length > 0) {
    celsius.disabled = true;
  } else {
    celsius.disabled = false;
  }
};

celsius.onchange = function () {
  if (this.value != "" || this.value.length > 0) {
    fahrenheit.disabled = true;
  } else {
    fahrenheit.disabled = false;
  }
};

btnConvert.addEventListener("click", () => {
  if (fahrenheit.disabled) {
    const value = parseFloat(celsius.value);
    c2f(value);
  } else if (celsius.disabled) {
    const value = parseFloat(fahrenheit.value);
    f2c(value);
  }
});

function f2c(value) {
  result = ((value - 32) * 5) / 9;
  celsius.value = result.toFixed(2);
}

function c2f(value) {
  result = (value * 9) / 5 + 32;
  fahrenheit.value = result.toFixed(2);
}

const arrNum = document.getElementById("numbers");
const minNum = document.getElementById("min");
const maxNum = document.getElementById("max");

arrNum.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    minMax(arrNum.value);
  }
});

function minMax(value) {
  const numArr = value.split(" ");
  let min = Math.min(...numArr);
  let max = Math.max(...numArr);

  minNum.value = min;
  maxNum.value = max;
}

// IIFE
(function (length, width) {
  console.log(
    `The area of a rectangle with a length of ${length} and a with of ${width} is ${
      length * width
    }.`
  );
})(4, 5);
