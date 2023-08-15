const colorFeature1Radio = document.getElementById("colorFeature1");
const colorFeature2Radio = document.getElementById("colorFeature2");
const patternFeature1Radio = document.getElementById("patternFeature1");
const patternFeature2Radio = document.getElementById("patternFeature2");
const patternFeature3Radio = document.getElementById("patternFeature3");
const functionFeature1Radio = document.getElementById("functionFeature1");
const functionFeature2Radio = document.getElementById("functionFeature2");
const functionFeature3Radio = document.getElementById("functionFeature3");
const resetButton = document.getElementById("resetButton");

const doubleProduct = document.querySelector(".product.double");
const retroProduct = document.querySelector(".product.retro");
const otherProducts = document.querySelectorAll(".product:not(.double):not(.retro)");

//1st
colorFeature1Radio.addEventListener("change", function() {
  if (colorFeature1Radio.checked) {
	doubleProduct.classList.remove("hidden");
	retroProduct.classList.remove("hidden");
	otherProducts.forEach(product => product.classList.add("hidden"));
  }
});

//2nd
colorFeature2Radio.addEventListener("change", function() {
  if (colorFeature2Radio.checked) {
	doubleProduct.classList.add("hidden");
	retroProduct.classList.add("hidden");
	otherProducts.forEach(product => product.classList.remove("hidden"));
  }
});

//3rd
patternFeature1Radio.addEventListener("change", function() {
  if (patternFeature1Radio.checked) {
	doubleProduct.classList.add("hidden");
	retroProduct.classList.add("hidden");
	otherProducts.forEach(product => product.classList.remove("hidden"));
  }
});

//4th
patternFeature2Radio.addEventListener("change", function() {
  if (patternFeature2Radio.checked) {
	doubleProduct.classList.add("hidden");
	retroProduct.classList.add("hidden");
	otherProducts.forEach(product => product.classList.remove("hidden"));
  }
});

//5th
patternFeature3Radio.addEventListener("change", function() {
  if (patternFeature3Radio.checked) {
	doubleProduct.classList.add("hidden");
	retroProduct.classList.add("hidden");
	otherProducts.forEach(product => product.classList.remove("hidden"));
  }
});

//6th
functionFeature1Radio.addEventListener("change", function() {
  if (functionFeature1Radio.checked) {
	doubleProduct.classList.add("hidden");
	retroProduct.classList.add("hidden");
	otherProducts.forEach(product => product.classList.remove("hidden"));
  }
});

//7th
functionFeature2Radio.addEventListener("change", function() {
  if (functionFeature2Radio.checked) {
	doubleProduct.classList.add("hidden");
	retroProduct.classList.add("hidden");
	otherProducts.forEach(product => product.classList.remove("hidden"));
  }
});

//8th
functionFeature3Radio.addEventListener("change", function() {
  if (functionFeature3Radio.checked) {
	doubleProduct.classList.add("hidden");
	retroProduct.classList.add("hidden");
	otherProducts.forEach(product => product.classList.remove("hidden"));
  }
});

//reset button
resetButton.addEventListener("click", function() {
    colorFeature1Radio.checked = false;
    colorFeature2Radio.checked = false;
    patternFeature1Radio.checked = false;
    patternFeature2Radio.checked = false;
    patternFeature3Radio.checked = false;
    functionFeature1Radio.checked = false;
    functionFeature2Radio.checked = false;
    functionFeature3Radio.checked = false;
    doubleProduct.classList.remove("hidden");
    retroProduct.classList.remove("hidden");
    otherProducts.forEach(product => product.classList.remove("hidden"));
  });