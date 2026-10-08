function flipColor() {
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach(function (paragraph) {
    if (paragraph.style.color === "red") {
      paragraph.style.color = "black";
    } else {
      paragraph.style.color = "red";
    }
  });
}
