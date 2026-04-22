const skillData: Record<string, any> = {
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

// Cache the DOM elements (O(1) access later)
const parentEl = document.getElementById('chip-parent');
const titleEl = document.getElementById('display-title');
const descEl = document.getElementById('display-desc');
const linkEl = document.getElementById('display-link') as HTMLAnchorElement;
const iconEl = document.getElementById('display-icon') as HTMLImageElement;

parent?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const chip = target.closest('.chip');

    if (chip && chip.id in skillData) {
        const data = skillData[chip.id];

        // 1. SAFE UPDATE: .textContent prevents XSS attacks
        if (titleEl) titleEl.textContent = data.name;
        if (descEl) descEl.textContent = data.desc;

        // 2. ATTRIBUTE UPDATE: Direct property manipulation
        if (linkEl) {
            linkEl.href = data.link;
            linkEl.textContent = data.label;
        }
        if (iconEl) {
            iconEl.src = `assets/icons/${data.icon}`;
        }

        // 3. UI STATE: Manage active class
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        // 4. ANIMATION REFRESH: If using AOS, trigger a refresh for the new content
        // @ts-ignore
        if (window.AOS) window.AOS.refresh();
    }
})