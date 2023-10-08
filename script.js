//-----------------------------------------NavBar--------------
var posBeforeScroll = document.documentElement.scrollTop;
var isMenuSticky = false;

window.onscroll = function () {
  hideAndShowMenu();
};

function hideAndShowMenu() {
  var posCurrentScroll = document.documentElement.scrollTop;
  var navbar = document.getElementById("navbar");

  if (posCurrentScroll < 10) {
    navbar.style.backgroundColor = "transparent";
    document.querySelector(".titles1").style.color = "#fff";
    document.querySelector(".titles2").style.color = "#fff";
    document.querySelector("#logoImg").style.border = "none";
    isMenuSticky = false;
  } else {
    if (!isMenuSticky) {
      navbar.style.backgroundColor = "white";
      document.querySelector(".titles1").style.color = "blue";
      document.querySelector(".titles2").style.color = "blue";
      document.querySelector("#logoImg").style.border = "1px solid gray";
      isMenuSticky = true;
    }
  }
  posBeforeScroll = posCurrentScroll;
}

//-----------------------------------------Carousel--------------
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const thumbnails = document.querySelectorAll(".thumbnail-button");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

function goToSlide(index) {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft = index * slideWidth;
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    goToSlide(index);
  });
});

//-----------------------------------------Tabs--------------

function openMountain(evt, mountain) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(mountain).style.display = "block";
  evt.currentTarget.className += " active";
}

openMountain(null, "montain1");
