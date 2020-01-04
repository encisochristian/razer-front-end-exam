// var menuIcon = new Image();
// menuIcon.id = "menuIcon";
// menuIcon.src = "assets/images/Mobile/1.png";

// var closeIcon = document.createElement("span");
// closeIcon.className = "close-icon";
// closeIcon.innerHTML = "&#10006;";

// var toggleIconContainer = document.getElementById("toggle");

// var menuItems = document.querySelectorAll(".menu-item");
// var menuKeyArray = Object.keys(menuItems);

// function onToggleMobileMenu() {
//   var isMenuOpen = toggleIconContainer.contains(closeIcon);
//   if (isMenuOpen) {
//     menuKeyArray.forEach(function(key) {
//       menuItems[key].style.display = "none";
//     });
//     closeIcon.replaceWith(menuIcon);
//   } else {
// menuKeyArray.forEach(function(key) {
//   menuItems[key].style.display = "block";
// });
//     menuIcon.replaceWith(closeIcon);
//   }
// }

// function initToggleIcon() {
//   toggleIconContainer.appendChild(menuIcon);
// }

// window.addEventListener("load", initToggleIcon());

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
  var overlayMenu = document.querySelector("#mobile-menu ul.menu");
  menuKeyArray.forEach(function(key) {
    var clone = menuItems[key].cloneNode(true);
    overlayMenu.appendChild(clone);
  });
}

function init() {
  initOverlayMenuContent();
}

window.addEventListener("load", init());
