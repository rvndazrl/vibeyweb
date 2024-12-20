// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Form Submission Alert
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for contacting us! We'll get back to you soon.");
        form.reset();
    });
});
