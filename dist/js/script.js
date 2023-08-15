// Navbar Fixed
window.onscroll = function () {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop; // ngambil dari jarak posisi header terhadap top nya
   const toTop = document.querySelector('#to-top');

   if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');

   } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
   }

};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
   hamburger.classList.toggle('hamburger-active');
   navMenu.classList.toggle('hidden');
});

// GSAP Animation
TweenMax.from('.lingkaran', 2, { delay: 0.1, opacity: 0, y: -800, ease: Expo.easeInOut })
TweenMax.from('.daffa', 2, { delay: 0.5, opacity: 0, y: -800, ease: Expo.easeInOut })

// Klik diluar Hamburger Menu
window.addEventListener('click', function (e) {
   if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
   }
});

// Darkmode toggle dan Local Storage untuk Dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
   if (darkToggle.checked) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
   } else {
      html.classList.remove('dark');
      localStorage.theme = 'light';
   }
});

// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   darkToggle.checked = true;
} else {
   darkToggle.checked = false;
}

// Type Text atau Teks Mengetik Otomatis
const textElement = document.querySelector('.typed-text');
const textToType = 'Web Developer & Graphic Design';
let currentIndex = 0;

function typeText() {
   if (currentIndex < textToType.length) {
      textElement.textContent += textToType[currentIndex];
      currentIndex++;
      setTimeout(typeText, 150); // Ubah angka ini untuk mengatur kecepatan animasi
      loop: true
   } else {
      setTimeout(resetText, 1000); // Mengatur waktu sebelum animasi dimulai kembali (dalam milidetik)
   }
}

function resetText() {
   textElement.textContent = '';
   currentIndex = 0;
   setTimeout(typeText, 150); // Memulai animasi dari awal
}

typeText();








