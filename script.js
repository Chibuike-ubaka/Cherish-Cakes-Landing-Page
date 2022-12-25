const toggleButton = document.querySelector(".navbar-toggler");
const icon = document.querySelector(".navbar-toggler-icon i");

let isExpanded = false;

toggleButton.addEventListener("click", () => {
  isExpanded = !isExpanded;
  if (isExpanded) {
    icon.classList.remove("fa-list-ul");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-list-ul");
  }
});




