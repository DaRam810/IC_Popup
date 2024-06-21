var popup = document.getElementById("popup");
var popupShown = localStorage.getItem("popupShown");

function closePopup() {
  popup.style.display = "none";
  localStorage.setItem("popupShown", "true");
}

if (popupShown === null || popupShown === "false") {
  popup.style.display = "block";
}

