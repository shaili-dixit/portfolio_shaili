// Typing Effect for Hero Section
const texts = ["Frontend Developer", "AI Enthusiast", "Problem Solver", "Web Developer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingElement = document.querySelector(".typing-text");

  if (index >= texts.length) index = 0;
  currentText = texts[index];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause before delete
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      index++;
    }
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150);
}

document.addEventListener("DOMContentLoaded", typeEffect);
