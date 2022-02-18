function hideSelf() {
  let button = document.querySelector('button.hide-self-button');
  button.onclick = function () {
    button.hidden = true;
  };
}