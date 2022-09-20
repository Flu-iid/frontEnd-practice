export const Display = (element, displayProperty) => {
    const myElement = document.querySelector(element);
    const computedDisplay = window.getComputedStyle(myElement).display;
    (computedDisplay !== "none")
     ? (myElement.style.display = "none")
     : (myElement.style.display = displayProperty);
}