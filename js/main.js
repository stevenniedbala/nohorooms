// Contact form handler (static — prevents default and shows confirmation)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We\'ll get back to you soon.');
    contactForm.reset();
  });
}
