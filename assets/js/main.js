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
var imageModal = document.getElementById("fullscreen-product-image");
var clonedMainMenuItems = [];
var clonedProductsMenuItems = [];
var clonedHeadsetAndAudioMenuItems = [];
var depth = 0;
var activeMobileMenu;
let swiper;

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

// Product images slider

// render products slides on page load
var productImagesSlides = [
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-05-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-05-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-06-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-06-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-07-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-07-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-08-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-08-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-01-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-01-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-02-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-02-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-03-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-03-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-04-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-04-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-07-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-07-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-01-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-01-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-06-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-06-wireless-gaming-headset.jpg"
  },
  {
    smallImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-04-wireless-gaming-headset xs.jpg",
    largeImage:
      "assets/images/Desktop/JPG/razer-nari-gallery-04-wireless-gaming-headset.jpg"
  }
];

function renderProductImgesSlides() {
  var slidesWrapper = document.querySelector(".swiper-wrapper");
  productImagesSlides.forEach((slideInfo, idx) => {
    slidesWrapper.appendChild(createProductImageSlide(slideInfo, idx));
  });

  function createProductImageSlide(slideInfo, idx) {
    var div = document.createElement("div");
    div.className = "swiper-slide";
    // div.setAttribute("onclick", "openFullScreenImage(" + idx + ")");
    var button = document.createElement("button");
    button.className = "view-fullscreen-button";
    button.innerHTML = "View Fullscreen";
    button.setAttribute("onclick", "openFullScreenImage(" + idx + ")");
    var img = new Image();
    img.src = slideInfo.smallImage;

    div.appendChild(button);
    div.appendChild(img);

    return div;
  }
  swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      }
    }
  });
}

function openFullScreenImage(slideIdx) {
  var currentImage = imageModal.querySelector("img");
  if (currentImage != null) {
    currentImage.remove();
  }
  var imageContainer = document.querySelector(
    "#fullscreen-product-image .overlay-content"
  );
  var img = new Image();
  productImagesSlides.forEach((slideItem, idx) => {
    if (slideIdx != idx) return;
    img.src = slideItem.largeImage;
    img.className = "img-fluid";
  });

  imageContainer.appendChild(img);
  togglImageModal(1);
}

function togglImageModal(state) {
  if (state) {
    imageModal.style.display = "block";
  } else {
    imageModal.style.display = "none";
  }
}

// THX Spatial Audio
var windowHeight;
var elementToAnimate = document.getElementById("thx-content");

function initThxContent() {
  window.addEventListener("scroll", animateElement);
  window.addEventListener("resize", updateWindowHeight);

  updateWindowHeight();
  animateElement();
}

function animateElement() {
  var positionFromTop = elementToAnimate.getBoundingClientRect().top;
  if (positionFromTop - windowHeight <= 0) {
    elementToAnimate.classList.add("razer-fade-in");
    elementToAnimate.classList.remove("razer-hidden");
  }
}

function updateWindowHeight() {
  windowHeight = window.innerHeight;
}

// Other products section
var viewAllProductsButton = document.getElementById("view-all-products-button");
var showLessProductsButton = document.getElementById(
  "show-less-product-button"
);
var elementsToToggle = document.querySelectorAll(
  "#other-products-section div.razer-card"
);
function onClickViewAllProducts() {
  viewAllProductsButton.style.display = "none";
  showLessProductsButton.style.display = "inline-block";

  for (var i = 0; i < elementsToToggle.length; i++) {
    elementsToToggle[i].style.display = "block";
  }
}
function onClickShowLessProducts() {
  showLessProductsButton.style.display = "none";
  viewAllProductsButton.style.display = "inline-block";

  for (var i = 0; i < elementsToToggle.length; i++) {
    if (i > 1) {
      elementsToToggle[i].style.display = "none";
    }
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
  renderProductImgesSlides();
  initThxContent();
}

window.addEventListener("load", init());
