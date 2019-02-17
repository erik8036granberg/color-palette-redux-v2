"use strict";

const defaultColor = "#FF0000";
let selected = "Monochromatic";
let colorWell;
let activeColor;

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");

  // eventlistner colorpicker
  document
    .querySelector("#colorWell")
    .addEventListener("input", colorPick, false);

  // eventlistner color set selecter
  document
    .querySelector("#selectColor")
    .addEventListener("change", selectColor);

  // eventlistner reset button 
  document.querySelector("#reset").addEventListener("click", reset);

  setBaseColor(defaultColor);
}

function colorPick(event) {
  console.log("colorPick used");

  // get value from colorpicker
  let hexColor = event.target.value;
  setBaseColor(hexColor);
}

function setBaseColor(hexColor) {
  console.log("setBaseColor");

  // convert color from colorpicker to hsl
  let rgbColor = hexToRgb(hexColor);
  let hslColor = rgbToHsl(rgbColor);
  activeColor = hslColor;

  // Set color in middle box
  document.querySelector("#box_3").style.backgroundColor = `hsl(${hslColor.h},${
    hslColor.s
  }%,${hslColor.l}%`;

  selectedColor();
}

//  - - - - - - - - - - - - - - - selected colors - - - - - - - - - - - - - - -

function selectColor() {
  console.log("selectColor used");

  // get values from color set dropdown
  selected = this.options[this.selectedIndex].value;
  selectedColor();
}

function selectedColor() {
  console.log("selectedColor");

  // check for chosen color set & go there - Monochromatic is default
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
  console.log("monochromaticSet");

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
  console.log("analogousSet");

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
  console.log("triadSet");
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
  console.log("complementarySet");
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
  console.log("compoundSet");
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
  console.log("shadeSet");
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
  console.log("labels");

  // get rgb color from boxes
  let color_1_rgb = box_1.style.backgroundColor;
  let color_2_rgb = box_2.style.backgroundColor;
  let color_3_rgb = box_3.style.backgroundColor;
  let color_4_rgb = box_4.style.backgroundColor;
  let color_5_rgb = box_5.style.backgroundColor;

  // convert rgb to hex
  let color_1_hex = rgbTagToHex(color_1_rgb);
  let color_2_hex = rgbTagToHex(color_2_rgb);
  let color_3_hex = rgbTagToHex(color_3_rgb);
  let color_4_hex = rgbTagToHex(color_4_rgb);
  let color_5_hex = rgbTagToHex(color_5_rgb);

  // convert rgb to hsl
  let color_1_hsl = rgbTagToHsl(color_1_rgb);
  let color_2_hsl = rgbTagToHsl(color_2_rgb);
  let color_3_hsl = rgbTagToHsl(color_3_rgb);
  let color_4_hsl = rgbTagToHsl(color_4_rgb);
  let color_5_hsl = rgbTagToHsl(color_5_rgb);

  // add text to label boxes
  document.querySelector("#box_1_label").innerHTML = "<p>" + color_1_rgb + "</p><p>" + color_1_hex + "</p><p>" + color_1_hsl + "</p>";
  document.querySelector("#box_2_label").innerHTML = "<p>" + color_2_rgb + "</p><p>" + color_2_hex + "</p><p>" + color_2_hsl + "</p>";
  document.querySelector("#box_3_label").innerHTML = "<p>" + color_3_rgb + "</p><p>" + color_3_hex + "</p><p>" + color_3_hsl + "</p>";
  document.querySelector("#box_4_label").innerHTML = "<p>" + color_4_rgb + "</p><p>" + color_4_hex + "</p><p>" + color_4_hsl + "</p>";
  document.querySelector("#box_5_label").innerHTML = "<p>" + color_5_rgb + "</p><p>" + color_5_hex + "</p><p>" + color_5_hsl + "</p>";
}

function reset() {
  console.log("reset");
  // reload page
  location.reload(true);
}

//  - - - - - - - - - - - - - - - color conversions - - - - - - - - - - - - - - -

function hexToRgb(hexColor) {
  console.log("hexToRgb returned");

  // hex tag in - rgb object out

  let subString1 = hexColor.substring(1, 3);
  let subString2 = hexColor.substring(3, 5);
  let subString3 = hexColor.substring(5, 7);

  let r = parseInt(subString1, 16);
  let g = parseInt(subString2, 16);
  let b = parseInt(subString3, 16);

  return {
    r,
    g,
    b
  };
}

function rgbToHsl(rgbColor) {
  console.log("rgbToHsl returned");

  // rgb object in - hsl object out 

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
  console.log("rgbTagToHex returned");

  // rgb tag in - hex tag out

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
  console.log("rgbTagToHsl returned");

  // rgb tag in - hsl tag out

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