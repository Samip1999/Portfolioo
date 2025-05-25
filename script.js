document.addEventListener("DOMContentLoaded", function () {
  // Typing animation
  const typeText = document.querySelector(".typewriter");
  const textArray = ["Software Developer", "ICT Educator"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = textArray[index];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typeText.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
    }

    setTimeout(type, isDeleting ? 50 : 120);
  }

  type();

  // Calculate Rato Bangala duration
  const ratoStart = new Date(2024, 9); // October 2024
  const now = new Date();
  const months = (now.getFullYear() - ratoStart.getFullYear()) * 12 + (now.getMonth() - ratoStart.getMonth());
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  let duration = "Oct 2024 - Present · ";
  if (years > 0) duration += `${years} yr${years > 1 ? 's' : ''}`;
  if (remMonths > 0) duration += ` ${remMonths} mo${remMonths > 1 ? 's' : ''}`;
  if (months === 0) duration += "Less than a month";
  document.getElementById("ratoDuration").textContent = duration;

  // EmailJS
  emailjs.init("Lt3KjrKyJU6LCjkgU"); // Replace with your EmailJS user ID

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_g9xc5qi", "service_g9xc5qi", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send message: " + error.text);
      });
  });
});
