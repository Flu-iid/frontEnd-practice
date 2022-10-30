const container = document.querySelector(".grid-container");

for (let n = 1; n <= 16; n++) {
  for (let m = 1; m <= 16; m++) {
    const content = document.createElement("div");
    content.classList.add(`${n}-${m}`);
    content.textContent = "A";

    container.appendChild(content);
    content.onmouseover = () => {
        content.textContent = String.fromCharCode(content.textContent.charCodeAt(0)+1)
    }
  }
}

