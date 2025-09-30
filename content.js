// Placeholder for dynamic content update based on assets folder

// Future implementation: fetch list of files from assets folder and update DOM accordingly
// Example: update image galleries, project lists, etc.

document.addEventListener('DOMContentLoaded', () => {
  // Example: update a section if assets are found (future implementation)
  // fetch('/assets/')
  //   .then(response => response.json())
  //   .then(files => {
  //     // Update DOM based on files
  //   });

  // For now, do nothing
});

//-------------------------------------------------------------------------------------------------------------------------------------------------

/* const card = document.querySelector('.about, .currently-learning, .interests, .projects, .goals, .certifications, .skills, .contact');
card.classList.add('show');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const cards = document.querySelectorAll('.about, .currently-learning, .interests, .projects, .goals, .certifications, .skills, .contact')
cards.forEach((card) => {
  observer.observe(card);
}); */


const cards = document.querySelectorAll('.header, .about, .currently-learning, .interests, .projects, .goals, .certifications, .skills, .contact');
cards.forEach((card, index) => {
  card.style.transitionDelay = '${index * 0.5s}';
  card.classList.add('show');
});
