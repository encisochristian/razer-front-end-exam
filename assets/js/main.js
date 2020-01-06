var overlayMenuTitle = document.querySelector("#mobile-menu p.overlay-title");
var mainMenuItems = document.querySelectorAll("#main-menu > li.menu-item > a");
var productsMenuItems = document.querySelectorAll(
  "#products-menu > li.menu-item > a"
);
var headsetAndAudioMenuItems = document.querySelectorAll(
  "#headset-and-audio-menu > li.menu-item > a"
);
var ctaButton = document.querySelector(
  "#main-menu > li.menu-item > button#cta-button"
);
var mobileMenuContainer = document.querySelector(
  "#mobile-menu .overlay-content"
);
var clonedMainMenuItems = [];
var clonedProductsMenuItems = [];
var clonedHeadsetAndAudioMenuItems = [];
var depth = 0;
var activeMobileMenu;

function renderMobileMainMenu() {
  if (activeMobileMenu == "main-menu") return;
  activeMobileMenu = "main-menu";
  document.getElementById("menu-back-icon").style.display = "none";
  renderMobileMenu(
    clonedMainMenuItems,
    "Menu",
    createMenuItem(ctaButton.cloneNode(true))
  );
}

function renderMobileProductsMenu() {
  if (activeMobileMenu == "products-menu") return;
  depth = 1;
  activeMobileMenu = "products-menu";
  document.getElementById("menu-back-icon").style.display = "block";
  renderMobileMenu(clonedProductsMenuItems, "Products");
}

function renderMobileHeadsetAndAudioMenu() {
  if (activeMobileMenu == "headset-and-audio-menu") return;
  depth = 2;
  activeMobileMenu = "headset-and-audio-menu";
  document.getElementById("menu-back-icon").style.display = "block";
  renderMobileMenu(clonedHeadsetAndAudioMenuItems, "Headset & Audio");
}

function renderMobileMenu(menuList, menuTitle = "Menu", additionalItem) {
  resetMobileMenu();
  changeOverlayMenuTitle(menuTitle);
  var ul = document.createElement("ul");
  ul.classList = "d-flex flex-wrap align-items-center";
  menuList.forEach(item => {
    ul.appendChild(createMenuItem(item));
  });
  if (additionalItem) {
    ul.appendChild(additionalItem);
  }
  mobileMenuContainer.appendChild(ul);
}

function resetMobileMenu() {
  var mobileMenuList = mobileMenuContainer.querySelector("ul");
  if (mobileMenuList != null) {
    mobileMenuList.remove();
  }
}

function createMenuItem(link) {
  var li = document.createElement("li");
  li.setAttribute("class", "menu-item");
  li.appendChild(link);
  return li;
}

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

function cloneDesktopMenuItems(original, copy) {
  for (var i = 0; i < original.length; i++) {
    copy.push(original[i].cloneNode(true));
  }
}

function goBack() {
  depth--;
  if (depth < 0) return;
  if (depth == 0) {
    renderMobileMainMenu();
  }
  if (depth == 1) {
    renderMobileProductsMenu();
  }
}

function init() {
  cloneDesktopMenuItems(mainMenuItems, clonedMainMenuItems);
  cloneDesktopMenuItems(productsMenuItems, clonedProductsMenuItems);
  cloneDesktopMenuItems(
    headsetAndAudioMenuItems,
    clonedHeadsetAndAudioMenuItems
  );
  renderMobileMainMenu();
}

window.addEventListener("load", init());
