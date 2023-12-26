function updateText() {
  const inputElement = document.getElementById("textInput");
  const displayElement = document.getElementById("displayText");
  displayElement.innerText = inputElement.value;
}

document.addEventListener("DOMContentLoaded", updateText());
