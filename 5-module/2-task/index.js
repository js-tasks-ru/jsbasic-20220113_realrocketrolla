function toggleText() {
	let button = document.querySelector("button.toggle-text-button");
    let text = button.nextElementSibling;
	if (button.length < 1 || text.length < 1) {
    return;
	}
  button.addEventListener("click", function(evt) {
		evt.preventDefault();
    let prevAttr = text.getAttribute("hidden") ? text.getAttribute("hidden") : false;
    if (prevAttr) {
      text.removeAttribute("hidden");
    } else {
      text.setAttribute("hidden", "true");
    }
  });
}
