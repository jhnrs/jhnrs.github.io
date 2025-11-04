const textArray = [
  " Hi! I'm John. 👋",
  " A Computer Engineering Student.",
  " I'm an Indie Developer.",
  " I'm a Music Lover.",
  " Still Learning...",
  " Still Growing..."
];

//values are based in delay. (ms)
const typingSpeed = 65;
const erasingSpeed = 25; 
const delayBetween = 1500;
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");


function toggle() {
  document.querySelector("typing");
}


function type() {
  if (charIndex < textArray[textIndex].length) {
    typingElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween)
  }
}

function erase() {
  if (charIndex > 0 ) {
    typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    setTimeout(erase, erasingSpeed);
    charIndex--;
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, delayBetween); 
});
/* ====================================================================================== */

const chipData = fetch("chipContentEquivalent.json")
/* .then(response => response.json())
.then(chipData => {
  console.log(chipData.JavaScript.programmingLanguageName);
}) */






const chipInfo = document.querySelector(".chip-info");
chipInfo.innerHTML = `
<div class="card">
<h2>${chipData.Dart.programmingLanguageName}</h2>
<p>${chipData.Dart.description}</p>
<div style="text-align: center;">
<span>🔗</span><a href="https://flutter.dev" target="_blank" rel="noopener noreferrer">flutter.dev</a>
</div>
</div>
`;



/* =========================================================================== */
const chipDartAlert = document.getElementById("Dart");

chipDartAlert.addEventListener("click", () => {
  alert("Dart");
});







/* import Typed from "typed.js";

var typed = new Typed(".typing", {
  strings:
  [
    "Hi! I'm John. 👋",
    "A Computer Engineering Student.",
    "I'm an Indie Developer.",
    "I'm a Music Lover.",
    "Still Learning...",
    "Still Growing..."
  ],
  typeSpeed: 85,
  backSpeed: 25,
  backDelay: 1500,
  loop: true
}); */


/* 
const chip = document.querySelector(".chip");
const chipInfo = document.querySelector(".chip-info");

fetch("chipContentEquivalent.json")
.then(response => {
  if (!response.ok) {
    throw new Error("Failed to load JSON data");
  }
    return response.json();
  })
  .then(languageData => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");

      const langInfo = languageData[langKey];
      chipInfo.innerHTML = `
        <div class="card">
          <h2>${langInfo.programmingLanguageName}</h2>
            <p>${langInfo.description}</p>
              <div style="text-align: center;">
                <span>🔗</span><a href="${langInfo.webLink}" target="_blank" rel="noopener noreferrer">${langInfo.webLabel}</a>
              </div>
        </div>
      `;
    });
  })
  .catch(error => {
    console.error("Error loading JSON data:", error);
    chipInfo.innerHTML = `<p style="color: red;">Error loading JSON data: ${error.message}</p>`;
  }) */
  /* chipInfo.textContent = languageData[chip.getAttribute("data-lang")]; */