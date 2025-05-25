// Countdown Timer
const targetDate = new Date('2025-08-27T00:00:00');
setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById('countdown').innerText = `${days} days left for ଶ୍ରୀ ଗଜାନନ ପୂଜା`;
}, 1000);

// Notice Banner Text
const notices = ["ମାଟି ଅନୁକୂଳ ,📅 ତାରିଖ – ଜୁନ ୨୭, ଶୁକ୍ରବାର ,🕔 ସମୟ – ସନ୍ଧ୍ୟା ୫ଟା"];
document.getElementById("noticeBanner").innerText = notices.join(" • ");

// PDF Collection
const years = [2019, 2020, 2021, 2022, 2023, 2024];
const container = document.getElementById("pdfCollection");
years.forEach(year => {
  container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="images/${year}/${year}.jpg" class="card-img-top" alt="${year} preview">
        <div class="card-body">
          <h5 class="card-title">${year} Collection</h5>
          <button class="btn btn-primary view-pdf" data-year="${year}">View PDF</button>
          <button class="btn btn-success view-images" data-year="${year}">View Images</button>
        </div>
      </div>
    </div>
  `;
});

// PDF Modal Setup
const pdfModalHTML = `
<div class="modal fade" id="pdfModal" tabindex="-1" aria-labelledby="pdfModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="pdfModalLabel">PDF Viewer</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe id="pdfViewer" src="" style="width: 100%; height: 500px; border: none;"></iframe>
      </div>
    </div>
  </div>
</div>`;
document.body.insertAdjacentHTML("beforeend", pdfModalHTML);

// Show PDF in Modal
let pdfModal;
document.addEventListener("click", e => {
  if (e.target.classList.contains("view-pdf")) {
    const year = e.target.getAttribute("data-year");
    document.getElementById("pdfViewer").src = `images/${year}/${year}.pdf#toolbar=0`;
    if (!pdfModal) pdfModal = new bootstrap.Modal(document.getElementById("pdfModal"));
    pdfModal.show();
  }
});

// Image Viewer Modal
const imageModalHTML = `
<div class="image-modal-overlay" id="imageModalOverlay">
  <div class="image-modal">
    <span class="close-btn" id="closeImageModal">&times;</span>
    <img id="modalImage" src="" alt="Yearly Slide">
    <button class="prev-btn">❮</button>
    <button class="next-btn">❯</button>
  </div>
</div>`;
document.body.insertAdjacentHTML("beforeend", imageModalHTML);

// JS Logic for Image Modal
let currentSlide = 1;
let totalSlides = 5;
let currentYear = null;
let autoAdvance;

const overlay = document.getElementById("imageModalOverlay");
const modalImg = document.getElementById("modalImage");

document.addEventListener("click", e => {
  if (e.target.classList.contains("view-images")) {
    currentYear = e.target.getAttribute("data-year");
    currentSlide = 1;
    showSlide();
    overlay.style.display = "flex";
    autoAdvance = setInterval(() => nextSlide(), 5000);
  }
});

document.querySelector(".prev-btn").onclick = () => prevSlide();
document.querySelector(".next-btn").onclick = () => nextSlide();
document.getElementById("closeImageModal").onclick = () => closeImageModal();
overlay.onclick = e => {
  if (e.target === overlay) closeImageModal();
};

function showSlide() {
  modalImg.src = `images/${currentYear}/slide${currentSlide}.jpg`;
}
function nextSlide() {
  currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
  showSlide();
}
function prevSlide() {
  currentSlide = currentSlide <= 1 ? totalSlides : currentSlide - 1;
  showSlide();
}
function closeImageModal() {
  overlay.style.display = "none";
  clearInterval(autoAdvance);
}

// Members Data
const members = Array.from({ length: 20 }, (_, i) => ({
  name: `Member ${i+1}`,
  phone: `99999${(10000 + i).toString().slice(-5)}`,
  img: `images/Members/name${i+1}.jpg`
}));
const memberCards = document.getElementById("memberCards");
members.forEach(m => {
  memberCards.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card text-center">
        <img src="${m.img}" class="card-img-top" alt="${m.name}">
        <div class="card-body">
          <h5>${m.name}</h5>
          <p>${m.phone}</p>
        </div>
      </div>
    </div>
  `;
});

// Members Data
const supportingTeam = Array.from({ length: 20 }, (_, i) => ({
  name: `Member ${i+1}`,
  phone: `99999${(10000 + i).toString().slice(-5)}`,
  img: `images/Members/name${i+1}.jpg`
}));
const supportingTeamCards = document.getElementById("supportingTeamCards");
members.forEach(m => {
  supportingTeamCards.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card text-center">
        <img src="${m.img}" class="card-img-top" alt="${m.name}">
        <div class="card-body">
          <h5>${m.name}</h5>
          <p>${m.phone}</p>
        </div>
      </div>
    </div>
  `;
});

// Language Toggle
let isEnglish = true;
document.getElementById("langToggle").addEventListener("click", () => {
  isEnglish = !isEnglish;
  document.getElementById("langToggle").innerText = isEnglish ? "ଓଡିଆ" : "English";
  document.querySelector("#contact p").innerText = isEnglish ?
    "Address: ମିର୍ଜ଼ାପୁର, ଓଡ଼ିଶା | Phone: 9999999999" :
    "ଠିକଣା: Mirjapur, Odisha | ଫୋନ: 9999999999";
});

// Scroll Animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Active Menu Highlighting
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll("section").forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      current = id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
