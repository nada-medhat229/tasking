function setDeliveryMode(button) {
  const toggleGroup = button.parentElement;
  toggleGroup.querySelectorAll("button").forEach((btn) => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}
function selectCity(city) {
  document.getElementById("selectedCity").innerText = city;
}
function navigatePage() {
  console.log("text");

  const selectedPage = document.getElementById("pageSelect").value;
  if (selectedPage && selectedPage !== window.location.pathname) {
    console.log("texkkokpkpt");
    window.location.href = selectedPage;
  }
}
const swiper = new Swiper(".category-swiper", {
  slidesPerView: 2.1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 8 },
  },
});
const featuredswiper = new Swiper(".featured-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 12,
  navigation: {
    nextEl: ".featured-swiper-button-next",
    prevEl: ".featured-swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2.2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});
const Picks = new Swiper(".Picks-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 12,
  navigation: {
    nextEl: ".Picks-swiper-button-next",
    prevEl: ".Picks-swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2.2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

const flashSwiper = new Swiper(".flash-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 12,
  navigation: {
    nextEl: ".flash-swiper-button-next",
    prevEl: ".flash-swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2.2 },
    768: { slidesPerView: 3 },
  },
});
const toggleButtons = document.getElementsByClassName("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

Array.from(toggleButtons).forEach((button) => {
  button.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
  });
});
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});
const deliveryBtn = document.querySelector(".filter-btn.active");
const feesBox = document.querySelector(".fees-box");
// const closeIcon = feesBox.querySelector(".fa-times");

// closeIcon.addEventListener("click", () => {
//   feesBox.style.display = "none";
//   deliveryBtn.classList.remove("active");
//   deliveryBtn
//     .querySelector("i.fas.fa-chevron-up")
//     .classList.replace("fa-chevron-up", "fa-chevron-down");
// });
