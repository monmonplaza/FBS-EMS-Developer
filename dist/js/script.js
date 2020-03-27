const toggle = document.querySelector(".toggle-menu i");
const error = document.querySelector(".error .grid");
const activity = document.querySelector(".activity .grid");
const avatar = document.querySelector(".main__avatar");

console.log(activity);

toggle.addEventListener("click", () => {
  if (error) {
    error.classList.toggle("open");
  } else if (activity) {
    activity.classList.toggle("open");
  }
  avatar.classList.toggle("hide");
});
