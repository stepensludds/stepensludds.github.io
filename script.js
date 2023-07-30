// JavaScript for the image gallery modal
function openModal(imageSrc, caption) {
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modalImage');
  var modalCaption = document.getElementById('modalCaption');

  modal.style.display = 'block';
  modalImage.src = imageSrc;
  modalCaption.textContent = caption;
}

function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// JavaScript for form validation
function validateForm() {
  var nameInput = document.querySelector('input[name="name"]');
  var emailInput = document.querySelector('input[name="email"]');
  var phoneInput = document.querySelector('input[name="phone"]');
  var countrySelect = document.querySelector('select[name="country"]');
  var messageInput = document.querySelector('textarea[name="message"]');

  if (!nameInput.value || !emailInput.value || !phoneInput.value || !countrySelect.value || !messageInput.value) {
    alert('Please fill in all mandatory fields.');
    return false;
  }

  // Additional validation logic can be added here if needed

  return true;
}

// Array of safety tips
// ... (previous JavaScript code) ...

// Array of safety tips
var safetyTips = [
  "Always lock your doors and windows when leaving home.",
  "Keep your porch well-lit to deter potential intruders.",
  "Join neighborhood watch patrols to increase community safety.",
  "Install a home security system for added protection.",
  "Stay vigilant and report any suspicious activities to the authorities.",
  "Form a strong sense of community with your neighbors, as this can foster a safer environment.",
  "Do not leave spare keys outside your home; instead, give them to a trusted neighbor.",
  "Ensure your house number is clearly visible from the street for emergency services.",
  "Keep valuable items, such as electronics and jewelry, out of sight from windows.",
  "Trim shrubbery and trees near your home to reduce potential hiding spots for criminals.",
  "If you observe suspicious behavior, do not confront the individual; contact law enforcement instead.",
  "Participate in crime prevention workshops and safety education programs.",
  "Consider setting up a neighborhood email or text alert system for quick communication.",
  "Keep your garage door closed, even when you are at home, to prevent opportunistic theft.",
  "When going on vacation, ask a trusted neighbor to collect your mail and keep an eye on your property.",
  "Invest in motion-activated lights for the exterior of your home.",
  "Secure sliding doors with a metal or wooden rod to prevent forced entry.",
  "Do not disclose vacation plans or extended absences on social media.",
  "Install peepholes in your front and back doors to identify visitors before opening.",
  "Never leave car keys or valuables visible inside your vehicle.",
  "Always park your car in well-lit and busy areas.",
  "If you notice a burnt-out streetlight or other safety hazards, report them to the appropriate authorities.",
  "Create a safety plan with your family, including emergency contact information.",
  "Participate in community clean-up events to maintain a tidy and safe neighborhood.",
];

// Function to get a random safety tip
function getRandomSafetyTip() {
  var randomIndex = Math.floor(Math.random() * safetyTips.length);
  return safetyTips[randomIndex];
}

// Display a random safety tip on page load
updateRandomSafetyTip();

// Function to change the random safety tip
function changeRandomSafetyTip() {
  var randomTip = getRandomSafetyTip();
  var randomTipElement = document.getElementById('randomSafetyTip');
  randomTipElement.textContent = randomTip;
}