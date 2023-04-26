// Membuat dropdown menu
const navbar = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};
// Menghilangkan menu
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (t) {
  if (!hamburger.contains(t.target) && !navbar.contains(t.target)) {
    navbar.classList.remove("active");
  }
});

// DOM button Gas kuy
const button = document.querySelector(".cta");
button.onmouseover = () => {
  button.style.background = "#55423d";
  button.style.color = "white";
};
button.onmouseout = () => {
  button.style.background = "#ffc0ad";
  button.style.color = "#010101";
};
button.onclick = () => {
  alert("Layanan kami sedang masa pengembangan");
};

// DOM bagian Profil

const profilCard = document.querySelector(".profil-card");
const title = document.querySelector(".title");
const text = document.querySelector(".text");

profilCard.onmouseover = () => {
  profilCard.style.background = "#55423d";
  text.style.color = "white";
  title.style.color = "white";
};
profilCard.onmouseout = () => {
  profilCard.style.background = "#ffc0ad";
  text.style.color = "#010101";
  title.style.color = "#010101";
};

const layanans = document.querySelectorAll(".layanan-card");
const titles = document.querySelectorAll(".layanan-card-title");
const descriptions = document.querySelectorAll(".layanan-card-deskripsi");
for (layanan of layanans) {
  layanan.onmouseover = bg;
  layanan.onmouseout = bg1;
}
function bg() {
  this.style.boxShadow = " 0 10px 10px 0 rgba(0, 0, 0, 0.5)";
}
function bg1() {
  this.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
}

// box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
