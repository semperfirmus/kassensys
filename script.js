// Smooth scrolling to sections
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  }
  
  // Contact form submission (mockup functionality)
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  });