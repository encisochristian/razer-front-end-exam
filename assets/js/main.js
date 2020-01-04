var menuItems = document.querySelectorAll(".menu-item");
var menuKeyArray = Object.keys(menuItems);
var overlayMenuTitle = document.querySelector("#mobile-menu p.overlay-title");

function toggleOverlayMenu(state) {
  if (state) {
    document.getElementById("mobile-menu").style.display = "block";
  } else {
    document.getElementById("mobile-menu").style.display = "none";
  }
}

function changeOverlayMenuTitle(newTitle) {
  overlayMenuTitle.innerHTML = newTitle;
}

function initOverlayMenuContent() {
  var overlayMenu = document.querySelector("#mobile-menu ul");
  menuKeyArray.forEach(function(key) {
    var clone = menuItems[key].cloneNode(true);
    overlayMenu.appendChild(clone);
  });
}

function init() {
  initOverlayMenuContent();
}

window.addEventListener("load", init());
