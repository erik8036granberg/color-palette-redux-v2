"use strict";

const defaultColor = "#FF0000";
let selected = "Monochromatic";
let colorWell;
let activeColor;

// colorboxes
const box_1 = document.querySelector("#box_1");
const box_2 = document.querySelector("#box_2");
const box_3 = document.querySelector("#box_3");
const box_4 = document.querySelector("#box_4");
const box_5 = document.querySelector("#box_5");

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
  document.querySelector("#reset").addEventListener("click", reset);

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
  console.log(hslColor);

  setBaseColor();
}

function setBaseColor() {
  console.log("setBaseColor run");

  let hslColor = activeColor;
  document.querySelector("#box_3").style.backgroundColor = `hsl(${hslColor.h},${
    hslColor.s
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
    shadeSet();
  }
}

//  - - - - - - - - - - - - - - - Color sets - - - - - - - - - - - - - - -

function monochromaticSet() {
  console.log("monochromaticSet run");

  let hslColor = activeColor;
  box_1.style.backgroundColor = `hsl(${hslColor.h},${hslColor.s}%,${parseInt(
    hslColor.l
  ) - 30}%`;
  box_2.style.backgroundColor = `hsl(${hslColor.h},${hslColor.s}%,${parseInt(
    hslColor.l
  ) - 15}%`;
  box_4.style.backgroundColor = `hsl(${hslColor.h},${hslColor.s}%,${parseInt(
    hslColor.l
  ) + 15}%`;
  box_5.style.backgroundColor = `hsl(${hslColor.h},${hslColor.s}%,${parseInt(
    hslColor.l
  ) + 30}%`;
  labels();
}

function analogousSet() {
  console.log("analogousSet run");

  let hslColor = activeColor;
  box_1.style.backgroundColor = `hsl(${parseInt(hslColor.h) - 60},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_2.style.backgroundColor = `hsl(${parseInt(hslColor.h) - 30},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_4.style.backgroundColor = `hsl(${parseInt(hslColor.h) + 30},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_5.style.backgroundColor = `hsl(${parseInt(hslColor.h) + 60},${
    hslColor.s
  }%,${hslColor.l}%`;
  labels();
}

function triadSet() {
  let hslColor = activeColor;
  console.log("triadSet run");
  box_1.style.backgroundColor = `hsl(${parseInt(hslColor.h) + 120},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_2.style.backgroundColor = `hsl(${parseInt(hslColor.h) - 120},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_4.style.backgroundColor = `hsl(${parseInt(hslColor.h) + 120},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_5.style.backgroundColor = `hsl(${parseInt(hslColor.h) - 120},${
    hslColor.s
  }%,${hslColor.l}%`;
  labels();
}

function complementarySet() {
  let hslColor = activeColor;
  console.log("complementarySet run");
  box_1.style.backgroundColor = `hsl(${hslColor.h},${hslColor.s}%,${
    hslColor.l
  }%`;
  box_2.style.backgroundColor = `hsl(${parseInt(hslColor.h) + 180},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_4.style.backgroundColor = `hsl(${parseInt(hslColor.h) + 180},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_5.style.backgroundColor = `hsl(${hslColor.h},${hslColor.s}%,${
    hslColor.l
  }%`;
  labels();
}

function compoundSet() {
  let hslColor = activeColor;
  console.log("compoundSet run");
  box_1.style.backgroundColor = `hsl(${parseInt(hslColor.h) + 45},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_2.style.backgroundColor = `hsl(${parseInt(hslColor.h) + 180},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_4.style.backgroundColor = `hsl(${parseInt(hslColor.h) - 45},${
    hslColor.s
  }%,${hslColor.l}%`;
  box_5.style.backgroundColor = `hsl(${parseInt(hslColor.h) + 180},${
    hslColor.s
  }%,${hslColor.l}%`;
  labels();
}

function shadeSet() {
  let hslColor = activeColor;
  console.log("shadeSet run");
  box_1.style.backgroundColor = `hsl(${hslColor.h},${parseInt(hslColor.s) +
    30}%,${hslColor.l}%`;
  box_2.style.backgroundColor = `hsl(${hslColor.h},${parseInt(hslColor.s) +
    15}%,${hslColor.l}%`;
  box_4.style.backgroundColor = `hsl(${hslColor.h},${parseInt(hslColor.s) -
    15}%,${hslColor.l}%`;
  box_5.style.backgroundColor = `hsl(${hslColor.h},${parseInt(hslColor.s) -
    30}%,${hslColor.l}%`;
  labels();
}

function labels() {

  // choose label boxes
  document.querySelector("#box_1_label");
  document.querySelector("#box_2_label");
  document.querySelector("#box_3_label");
  document.querySelector("#box_4_label");
  document.querySelector("#box_5_label");

  // get rgb color from boxes
  let color_1 = box_1.style.backgroundColor;
  let color_2 = box_2.style.backgroundColor;
  let color_3 = box_3.style.backgroundColor;
  let color_4 = box_4.style.backgroundColor;
  let color_5 = box_5.style.backgroundColor;
  console.log("color_1 rgb: " + color_1);

  // convet rgb to hex
  let color_1_hex = rgbTagToHex(color_1);
  let color_2_hex = rgbTagToHex(color_2);
  let color_3_hex = rgbTagToHex(color_3);
  let color_4_hex = rgbTagToHex(color_4);
  let color_5_hex = rgbTagToHex(color_5);

  // convet rgb to hsl
  let color_1_hsl = rgbTagToHsl(color_1);
  let color_2_hsl = rgbTagToHsl(color_2);
  let color_3_hsl = rgbTagToHsl(color_3);
  let color_4_hsl = rgbTagToHsl(color_4);
  let color_5_hsl = rgbTagToHsl(color_5);

  // add text to label boxes
  box_1_label.innerHTML = "<p>" + box_1.style.backgroundColor + "</p><p>" + color_1_hex + "</p><p>" + color_1_hsl + "</p>";
  box_2_label.innerHTML = "<p>" + box_2.style.backgroundColor + "</p><p>" + color_2_hex + "</p><p>" + color_2_hsl + "</p>";
  box_3_label.innerHTML = "<p>" + box_3.style.backgroundColor + "</p><p>" + color_3_hex + "</p><p>" + color_3_hsl + "</p>";
  box_4_label.innerHTML = "<p>" + box_4.style.backgroundColor + "</p><p>" + color_4_hex + "</p><p>" + color_4_hsl + "</p>";
  box_5_label.innerHTML = "<p>" + box_5.style.backgroundColor + "</p><p>" + color_5_hex + "</p><p>" + color_5_hsl + "</p>";
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

  return {
    h,
    s,
    l
  };
}


function rgbTagToHex(color) {
  console.log("rgbTagToHex");
  color = "" + color;
  if (!color || color.indexOf("rgb") < 0) {
    return;
  }

  if (color.charAt(0) == "#") {
    return color;
  }

  var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
    r = parseInt(nums[2], 10).toString(16),
    g = parseInt(nums[3], 10).toString(16),
    b = parseInt(nums[4], 10).toString(16);

  return (
    "#" +
    ((r.length == 1 ? "0" + r : r) +
      (g.length == 1 ? "0" + g : g) +
      (b.length == 1 ? "0" + b : b))
  );
}

function rgbTagToHsl(color) {
  console.log("rgbTagToHsl");

  color = color.substring(4, color.length - 1)
    .replace(/ /g, '')
    .split(',');

  let r = color[0];
  let g = color[1];
  let b = color[2];

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

  h = Math.round(h * 10) / 10;
  s = Math.round(s * 10) / 10;
  l = Math.round(l * 10) / 10;

  const hslString = `hsl(${h}, ${s}%, ${l}%)`;
  return hslString;
}

function reset() {
  console.log("reset");
  location.reload(true);
}