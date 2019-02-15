"use strict";

const defaultColor = "#FF0000";
let selected = "Monochromatic";
let colorWell;
let activeColor;

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  document
    .querySelector("#colorWell")
    .addEventListener("input", colorPick, false);
  document
    .querySelector("#selectColor")
    .addEventListener("change", selectColor);
  colorConvert(defaultColor);
}

function colorPick(event) {
  console.log("colorPick run");
  let hexColor = event.target.value;
  colorConvert(hexColor);
}

function colorConvert(hexColor) {
  console.log("colorConvert run");
  let rgbColor = hexToRgb(hexColor);
  let hslColor = rgbToHsl(rgbColor);
  activeColor = hslColor;
  setBaseColor();
}

function setBaseColor() {
  console.log("setBaseColor run");

  let hslColor = activeColor;
  document.querySelector("#box_3").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  selectedColor();
}

//  - - - - - - - - - - - - - - - select color dropdown - - - - - - - - - - - - - - -

function selectColor() {
  console.log("selectColor run");
  selected = this.options[this.selectedIndex].value;
  selectedColor();
}

function selectedColor() {
  console.log("setColor run");

  if (selected === "Monochromatic") {
    monochromaticSet();
  }
  if (selected === "Analogous") {
    analogousSet();
  }
  if (selected === "Triad") {
    triadSet();
  }
  if (selected === "Complementary") {
    complementarySet();
  }
  if (selected === "Compound") {
    compoundSet();
  }
  if (selected === "Shades") {
    shadesSet();
  }
}

//  - - - - - - - - - - - - - - - Color sets - - - - - - - - - - - - - - -

function monochromaticSet() {
  console.log("monochromaticSet run");

  let hslColor = activeColor;
  document.querySelector("#box_1").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${parseInt(hslColor.l) - 30}%`;
  document.querySelector("#box_2").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${parseInt(hslColor.l) - 15}%`;
  document.querySelector("#box_4").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${parseInt(hslColor.l) + 15}%`;
  document.querySelector("#box_5").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${parseInt(hslColor.l) + 30}%`;
}

function analogousSet() {
  console.log("analogousSet run");

  let hslColor = activeColor;
  document.querySelector("#box_1").style.backgroundColor = `hsl(${parseInt(hslColor.h) - 60},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_2").style.backgroundColor = `hsl(${parseInt(hslColor.h) - 30},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_4").style.backgroundColor = `hsl(${parseInt(hslColor.h) + 30},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_5").style.backgroundColor = `hsl(${parseInt(hslColor.h) + 60},${hslColor.s
  }%,${hslColor.l}%`;
}

function triadSet() {
  let hslColor = activeColor;
  console.log("triadSet run");
  document.querySelector("#box_1").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_2").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_4").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_5").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
}

function complementarySet() {
  let hslColor = activeColor;
  console.log("complementarySet run");
  document.querySelector("#box_1").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_2").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_4").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_5").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
}

function compoundSet() {
  let hslColor = activeColor;
  console.log("compoundSet run");
  document.querySelector("#box_1").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_2").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_4").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_5").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
}

function shadesSet() {
  let hslColor = activeColor;
  console.log("shadesSet run");
  document.querySelector("#box_1").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_2").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_4").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
  document.querySelector("#box_5").style.backgroundColor = `hsl(${hslColor.h},${hslColor.s
  }%,${hslColor.l}%`;
}


//  - - - - - - - - - - - - - - - hexToRgb - - - - - - - - - - - - - - -

function hexToRgb(hexColor) {
  console.log("hexToRgb");

  let subString1 = hexColor.substring(1, 3);
  let subString2 = hexColor.substring(3, 5);
  let subString3 = hexColor.substring(5, 7);

  console.log(subString1, subString2, subString3);

  let r = parseInt(subString1, 16);
  let g = parseInt(subString2, 16);
  let b = parseInt(subString3, 16);
  console.log(r, g, b);

  return {
    r,
    g,
    b
  };
}

//  - - - - - - - - - - - - - - - rgbToHsl - - - - - - - - - - - - - - -

function rgbToHsl(rgbColor) {
  console.log("rgbToHsl run");

  let r = rgbColor.r;
  let g = rgbColor.g;
  let b = rgbColor.b;

  r /= 255;
  g /= 255;
  b /= 255;
  let h, s, l;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }
  if (h < 0) {
    h = h + 360;
  }
  l = (min + max) / 2;
  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

  return {
    h,
    s,
    l
  };
}