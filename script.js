// Countdown Timer
const targetDate = new Date('2025-08-27T00:00:00');
const glowClasses = ["glow-red", "glow-green", "glow-blue", "glow-gold"];
const festiveGradients = [
    'linear-gradient(-45deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e)',
    'linear-gradient(-45deg, #fbc2eb, #a6c1ee, #fbc2eb, #a6c1ee)',
    'linear-gradient(-45deg, #fddb92, #d1fdff, #fddb92, #d1fdff)',
    'linear-gradient(-45deg, #84fab0, #8fd3f4, #84fab0, #8fd3f4)',
    'linear-gradient(-45deg, #a18cd1, #fbc2eb, #a18cd1, #fbc2eb)',
    'linear-gradient(-45deg, #ffecd2, #fcb69f, #ffecd2, #fcb69f)',
    'linear-gradient(-45deg, #a1c4fd, #c2e9fb, #a1c4fd, #c2e9fb)',
    'linear-gradient(-45deg, #ffdde1, #ee9ca7, #ffdde1, #ee9ca7)'
];
setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `${days} days left for Ganesh Puja`;
}, 1000);

// Notice Banner Text
const notices = ["ମାଟି ଅନୁକୂଳ ,📅 ତାରିଖ – ଜୁନ ୨୭, ଶୁକ୍ରବାର ,🕔 ସମୟ – ସନ୍ଧ୍ୟା ୫ଟା"];
document.getElementById("noticeBanner").innerText = notices.join(" • ");

// PDF Collection
const years = [2024, 2023, 2022, 2021, 2020, 2019]
const container = document.getElementById("pdfCollection");
years.forEach(year => {
    container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="images/${year}/${year}.jpg" class="card-img-top" alt="${year} preview">
        <div class="card-body">
          <h5 class="card-title">${year} Story</h5>
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
const totalSlidesMap = {
    2019: 4,
    2020: 6,
    2021: 9,
    2022: 1,
    2023: 9,
    2024: 12,
};
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
let totalSlides = 0;
let currentYear = null;
let autoAdvance;


const overlay = document.getElementById("imageModalOverlay");
const modalImg = document.getElementById("modalImage");

document.addEventListener("click", e => {
    if (e.target.classList.contains("view-images")) {
        currentYear = e.target.getAttribute("data-year");
        totalSlides = totalSlidesMap[currentYear] || 0;
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
    modalImg.src = `images/${currentYear}/image-${currentSlide}.jpg`;
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
const members = [];
members.push({
    name: "Abhishek Kar",
    phone: "9337752195",
    img: "images/members/Sankara.png"
});
members.push({
    name: "Tapas Kar",
    phone: "6372771841",
    img: "images/members/Tapas.jpg"
});
members.push({
    name: "Tirtharaj Kar",
    phone: "8763464469",
    img: "images/members/Sipu.jpg"
});
members.push({
    name: "Partha Kar",
    phone: "7682084412",
    img: "images/members/Sikul.jpg"
});
members.push({
    name: "Aditya Prasad Kar",
    phone: "7606961776",
    img: "images/members/Dipak.jpg"
});
members.push({
    name: "Amandeep Khandual",
    phone: "8114919373",
    img: "images/members/Litu.jpg"
});
members.push({
    name: "Rusi Panda",
    phone: "7750899689",
    img: "images/members/RushiPanda.png"
});
members.push({
    name: "Ranga",
    phone: "7750899689",
    img: "images/members/Ranga.png"
});
members.push({
    name: "Suryakanta Kar",
    phone: "6372963597",
    img: "images/members/Gundu.png"
});
members.push({
    name: "Pabana",
    phone: "8144330615",
    img: "images/members/Pabana.png"
});
members.push({
    name: "Sutula",
    phone: "8984040716",
    img: "images/members/Sutula.jpg"
});
const memberCards = document.getElementById("memberCards");
members.forEach((m, i) => {
    const bg = festiveGradients[i % festiveGradients.length];
    memberCards.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card text-center festive-card" style="background: ${bg}; background-size: 200% 200%; animation: gradientShift 10s ease infinite;">
        <img src="${m.img}" class="card-img-top" alt="${m.name}">
        <div class="card-body">
          <h5>${m.phone}</h5>
          <h5>${m.name}</h5>          
        </div>
      </div>
    </div>
  `;
});

// supportingTeams Data
const supportingTeams = [];
supportingTeams.push({
    name: "Akash Kar",
    img: "images/members/Akash.png"
});
supportingTeams.push({
    name: "Bishal Kar",
    img: "images/members/Kanha.png"
});
supportingTeams.push({
    name: "Aditya Kar",
    img: "images/members/adiKar.jpg"
});
supportingTeams.push({
    name: "Deepesh Khandual",
    img: "images/members/adiKhandual.jpg"
});
supportingTeams.push({
    name: "Rishi",
    img: "images/members/Rishi.jpg"
});
supportingTeams.push({
    name: "Bilash Kar",
    img: "images/members/BabulKar.jpg"
});
supportingTeams.push({
    name: "Ludul",
    img: "images/members/Ludul.jpg"
});
supportingTeams.push({
    name: "Bapuna",
    img: "images/members/Bapuna.jpg"
});
supportingTeams.push({
    name: "Lutul",
    img: "images/members/Lutul.jpg"
});
supportingTeams.push({
    name: "Situ",
    img: "images/members/Situ.jpg"
});
supportingTeams.push({
    name: "Bunua",
    img: "images/members/Bunua.png"
});
supportingTeams.push({
    name: "Pintu",
    img: "images/members/PintuKar.jpg"
});
supportingTeams.push({
    name: "Raku",
    img: "images/members/rakuBhai.jpg"
});
supportingTeams.push({
    name: "Pravat Ku. Kar",
    img: "images/members/Bapi.jpg"
});
supportingTeams.push({
    name: "Saroj Ku. Kar",
    img: "images/members/Lipunana.jpg"
});
supportingTeams.push({
    name: "Jagabandhu Acharya",
    img: "images/members/JagaNa.jpg"
});
const supportingTeamCards = document.getElementById("supportingTeamCards");
supportingTeams.forEach((m, i) => {
    const bg = festiveGradients[i % festiveGradients.length];
    supportingTeamCards.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card text-center festive-card" style="background: ${bg}; background-size: 200% 200%; animation: gradientShift 10s ease infinite;">
        <img src="${m.img}" class="card-img-top" alt="${m.name}">
        <div class="card-body">
          <h5>${m.name}</h5>
        </div>
      </div>
    </div>
  `;
});
// Language Toggle
// let isEnglish = true;
// document.getElementById("langToggle").addEventListener("click", () => {
//     isEnglish = !isEnglish;
//     document.getElementById("langToggle").innerText = isEnglish ? "ଓଡିଆ" : "English";
//     document.querySelector("#contact p").innerText = isEnglish ?
//         "Address: ମିର୍ଜ଼ାପୁର, ଓଡ଼ିଶା | Phone: 73288 61610" :
//         "ଠିକଣା: Mirjapur, Odisha | ଫୋନ: 73288 61610";
// });

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
// const backToTop = document.getElementById("backToTop");
// window.addEventListener("scroll", () => {
//     backToTop.style.display = window.scrollY > 300 ? "block" : "none";
// });
// backToTop.addEventListener("click", () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// });

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
// Gallery Images 
const galleryImages = [
    "image-4.jpg",
    "image-3.jpg",
    "image-5.jpg",
    "image-2.jpg",
    "image-4.jpg",
    "image-6.jpg",
    "image-7.jpg",
    "image-8.jpg",
    "image-9.jpg",
    "image-10.jpg",
    "image-11.jpg"
];

const galleryContainer = document.getElementById("galleryImages");

galleryImages.forEach((img, index) => {
    const activeClass = index === 0 ? "active" : "";
    galleryContainer.innerHTML += `
    <div class="carousel-item ${activeClass}">
      <img src="images/2024/${img}" class="d-block w-100 gallery-img" alt="Gallery image ${index + 1}">
    </div>
  `;
});

const names = [
    "Gandhia Dash",
    "Atulya Das",
    "Bula Panda",
    "Lipi Rath",
    "Papulu",
    "Pari",
    "Lori",
    "Babaji Kar",
    "Apurba Das",
    "Annapurna Kar",
    "Adyashree Kar",
    "Mamata Kar",
    "Pravat Kar (Suman)",
    "Basanta Kar",
    "Hunda Sahoo",
    "Soumya Ranjan Kar (Laltu)",
    "Ashutosh Kar (Sonu)",
    "Malaya Ranjan Kar (Hunda)",
    "Tapan Kar",
    "Sankara Panda",
    "Ramesh Kar (Manga)",
    "Jitendra Kar",
    "Mahamaya Kar",
    "Niharika Kar",
    "Hemanta Kar (Dhadia)",
    "Bijua Panda",
    "Chitaranjan Kar (Muna)",
    "Bipin Das",
    "Amaya Kar",
    "Bibekananda Khandual (Lebu)",
    "Satyajit Rout (Pintu)",
    "Prashanta Khandual (Muna)",
    "Bibekananda Kar (Chema)",
    "Butu (Bantala)",
    "Jyoti Ranjan Kar (Papu)",
];


const nameListCards = document.getElementById("nameListCards");

// Create card structure for each name with empty <li>
names.forEach((name, index) => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-3";

    col.innerHTML = `
    <div class="card p-3 name-card">
      <ul class="m-0">
        <li class="typing-text" id="name-${index}" data-name="${name}"></li>
      </ul>
    </div>
  `;

    nameListCards.appendChild(col);
});

// Typing function
function typeWriterEffect(el, text, speed = 70) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

const nameObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.typed) {
            typeWriterEffect(entry.target, entry.target.dataset.name);
            entry.target.dataset.typed = "true";
        }
    });
}, {
    threshold: 0.5
});

// Observe each name element
document.querySelectorAll(".typing-text").forEach(el => nameObserver.observe(el));

function waitForImagesToLoad(containerId, callback) {
    const container = document.getElementById(containerId);
    const images = container.querySelectorAll("img");
    let loadedCount = 0;

    if (images.length === 0) {
        callback();
        return;
    }

    images.forEach(img => {
        if (img.complete) {
            loadedCount++;
        } else {
            img.onload = img.onerror = () => {
                loadedCount++;
                if (loadedCount === images.length) callback();
            };
        }
    });

    if (loadedCount === images.length) callback();
}

window.addEventListener("load", () => {
    waitForImagesToLoad("memberCards", checkAllDone);
    waitForImagesToLoad("supportingTeamCards", checkAllDone);
    waitForImagesToLoad("nameListCards", checkAllDone);
});

let sectionsLoaded = 0;
function checkAllDone() {
    sectionsLoaded++;
    if (sectionsLoaded === 3) {
        document.getElementById("loaderOverlay").style.display = "none";
    }
}
