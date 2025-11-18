const myIntroduction = [
  " Hi! I'm John. 👋",
  " A Computer Engineering Student.",
  " I'm an Indie Developer.",
  " I'm a Music Lover.",
  " Still Learning...",
  " Still Growing..."
];


const quotesData = [`
  " Our greatest weakness lies in giving up.
    The most certain way to succeed is
    always to try just one more time."
            `,
  ` The mind, nce stretched by a new idea,
    never returns to its original destination.` 
]

const quotesAuthor = [
  " - Thomas A. Edison", " - Oliver Wendell Holmes Sr."
]
// create typing animation for quotes. but for the quoteAuthor have use of AOS's zoom-in animation or fade up
const quoteTypingElement = document.getElementById("quote");
quoteTypingElement

//values are based in delay. (ms)
const typingSpeed = 65;
const erasingSpeed = 25; 
const delayBetween = 1500;
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

while (typingSetting == true) {
  function typingFunction() {
    type();
    erase();
    typingSetting();
  }

}
var typingSetting = true;

function toggle() {
  document.querySelector("#typing");
  typingSetting != typingSetting;

}


function type() {
  if (charIndex < myIntroduction[textIndex].length) {
    typingElement.textContent += myIntroduction[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween)
  }
}

function erase() {
  if (charIndex > 0 ) {
    typingElement.textContent = myIntroduction[textIndex].substring(0, charIndex - 1);
    setTimeout(erase, erasingSpeed);
    charIndex--;
  } else {
    textIndex++;
    if (textIndex >= myIntroduction.length) textIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (myIntroduction.length) setTimeout(type, delayBetween); 
});
/* ====================================================================================== */

/* .then(response => response.json())
.then(chipData => {
  console.log(chipData.JavaScript.programmingLanguageName);
  }) */
 
 
 
 
 
 
 
 
 
 /* =========================================================================== */
 /* const chipDartAlert = document.getElementById("Dart");
 
 chipDartAlert.addEventListener("click", () => {
  alert("Dart");
  }); */
  

  function chipContent(element) {
    //alert(element.id); //for testing of capturing id of an element
  const chipData = {
        "Dart": {
            "programmingLanguageName": "Dart",
            "description": "A client-optimized language by Google for fast apps on any platform, powering Flutter",
            "webLink": "https://dart.dev",
            "webLabel": "dart.dev"
        },
        "C#": {
            "programmingLanguageName": "C#",
            "description": "A modern, object-oriented language from Microsoft for building apps across web, deskopm cloud, and mobile using .NET.",
            "webLink": "https://learn.microsoft.com/dotnet/csharp",
            "webLabel": "learn.microsoft.com"
        },
        "C++": {
            "programmingLanguageName": "C++",
            "description": "A powerful general-purpose language for systems, game engines, and performance-critical applications.",
            "webLink": "https://isocpp.org",
            "webLabel": "isocpp.org"
        },
        "Java": {
            "programmingLanguageName": "Java",
            "description": "A class-based, object-oriented language designed for portability and reliability, widely used in enterprise and Android development",
            "webLink": "https://oracle.com/java",
            "webLabel": "oracle.com/java"
        },
        "Kotlin": {
            "programmingLanguageName": "Kotlin",
            "description": "A modern, concise language fully interoperable with Java, officially supported for Android development.",
            "webLink": "https://kotlinlang.org",
            "webLabel": "kotlinlang.org"
        },
        "JavaScript": {
            "programmingLanguageName": "JavaScript",
            "description": "The core scripting language of the web, enabling interactivity and dynamic behavior in webpages and applications.",
            "webLink": "https://developer.mozilla.org/js",
            "webLabel": "developer.mozilla.org/js"
        },
        "Python": {
            "programmingLanguageName": "Python",
            "description": "A high-level, easy-to-read langauge used for thev web, data science, AI, and automation.",
            "webLink": "https://python.org",
            "webLabel": "python.org"
        },



        "Flutter": {
        "frameworkName": "Flutter",
        "description": "Google's open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from one codebase.",
        "webLink": "https://flutter.dev",
        "webLabel": "flutter.dev"
    }

}


  const chipInfo = document.querySelector(".chip-info");
  const elementData = element.id;
  chipInfo.innerHTML = `
  <div class="content-box">
    <h2>${chipData.elementData.programmingLanguageName}</h2>
      <p>${chipData.elementData.description}</p>
      <div style="text-align: center;">
        <span>🔗</span><a href="${chipData.elementData.webLink}" target="_blank" rel="noopener noreferrer">${chipData.elementData.webLabel}</a>
      </div>
  </div>
  `;
  
}




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