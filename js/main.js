const navbar = document.querySelector(".navigation-header");
let experience_counter = document.querySelector(".experience-counter");
let student_counter = document.querySelector(".student-counter");
let certificate_counter = document.querySelector(".certificate-counter");
let count4 = document.querySelector(".experience-counter");

function navbarScrollAnimation() {
  if (window.scrollY >= 173) {
    navbar.classList.add("bg-white", "fixed");
  } else {
    navbar.classList.remove("bg-white", "fixed");
  }
}

window.addEventListener("scroll", navbarScrollAnimation);

// Constants for maximum values
const MAX_EXPERIENCE = 15;
const MAX_STUDENT = 1000;
const MAX_CERTIFICATE = 10;

function changeCounterNumber() {
  // Initialize counters
  let experience = 0;
  let student = 0;
  let certificate = 0;

  // Get counter section element
  const counterSection = document.getElementById("counter");

  // Check if the counter section exists
  if (counterSection) {
    // Use requestAnimationFrame for smoother animation
    function updateCounters() {
      // increase student with 100
      student += 100
      // Update counters
      experience_counter.innerHTML = experience++;
      student_counter.innerHTML = student;
      certificate_counter.innerHTML = certificate++;

      // Limit maximum values
      if (experience_counter.innerHTML >= MAX_EXPERIENCE) {
        experience_counter.innerHTML = MAX_EXPERIENCE;
      }
      if (student_counter.innerHTML >= MAX_STUDENT) {
        student_counter.innerHTML = MAX_STUDENT;
      }
      if (certificate_counter.innerHTML >= MAX_CERTIFICATE) {
        certificate_counter.innerHTML = MAX_CERTIFICATE;
      }

      // Request the next animation frame
      requestAnimationFrame(updateCounters);
    }

    // Call updateCounters initially
    updateCounters();
  }
}

// Attach the changeCounterNumber function to the scroll event
window.addEventListener("scroll", changeCounterNumber);
