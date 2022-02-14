function hideSelf() {
  let button = document.querySelector("button.hide-self-button");
  if (button.length < 1) {
    return;
  }
  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    button.setAttribute("hidden", "true");
  });
}