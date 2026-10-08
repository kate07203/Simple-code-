function flipColor() {
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach(function (paragraph) {
    if (paragraph.style.fontWeight === "bold") {
      paragraph.style.fontWeight = "normal";
    } else {
      paragraph.style.fontWeight = "bold";
    }
  });
}
const colorButton = document.querySelector("#colorButton");
colorButton.addEventListener("click", flipColor);

function flipMultipleParts() {
  const elements = document.querySelectorAll(".test");

  elements.forEach(function (element) {
    if (element.style.backgroundColor === "silver") {
      element.style.backgroundColor = "gold";
    } else {
      element.style.backgroundColor = "silver";
    }
  });
}
