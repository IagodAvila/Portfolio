// =============================
// WhatsApp Form
// =============================

function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5531992065206";

  const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, "_blank");
}


// =============================
// Navbar Scroll Effect
// =============================

const navbar = document.querySelector(".navegacao");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// =============================
// Reveal Animation
// =============================

window.addEventListener("load", () => {

  const reveals = document.querySelectorAll(".reveal");

  function revealElements() {

    const windowHeight = window.innerHeight;

    reveals.forEach(el => {

      const rect = el.getBoundingClientRect();

      if (rect.top < windowHeight * 0.85) {
        el.classList.add("active");
      }

    });

  }

  revealElements();

  window.addEventListener("scroll", revealElements);

});


// =============================
// Loader
// =============================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});


// =============================
// Modal
// =============================

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".modal-close");

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let imagens = [];
let index = 0;

document.querySelectorAll(".projetos-card").forEach((card) => {

  card.addEventListener("click", () => {

    imagens = card.dataset.images.split(",");

    index = 0;
    modalImg.src = imagens[index];

    modal.style.display = "flex";

  });

});

nextBtn.onclick = () => {
  index = (index + 1) % imagens.length;
  modalImg.src = imagens[index];
};

prevBtn.onclick = () => {
  index = (index - 1 + imagens.length) % imagens.length;
  modalImg.src = imagens[index];
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {
    modal.style.display = "none";
  }

  if (e.key === "ArrowRight") {
    nextBtn.click();
  }

  if (e.key === "ArrowLeft") {
    prevBtn.click();
  }

});


// =============================
// Botão do Modal
// =============================

document.querySelectorAll(".botao-projeto").forEach(botao => {

  botao.addEventListener("click", e => {
    e.stopPropagation();
  });

});