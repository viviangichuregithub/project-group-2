document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("ageButton");

  button.addEventListener("click", () => {
    const ageInput = prompt("Enter your age:");

    const age = parseInt(ageInput, 10);

    if (isNaN(age)) {
      alert("Please enter a valid number.");
    } else if (age > 18 && age < 60) {
      alert("Sorry, you don't qualify for an offer.");
    } else {
      alert("Welcome! You qualify for the current offers 🎉");
    }
  });
});