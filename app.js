// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
// Ketika hamburger menu di click
hamburgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

// Click di luar sidebar untuk menghilangkan nav
document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    };
});

// Kolom pencarian
const search = document.querySelector('#search');
search.addEventListener('click', () => {
    let search = prompt('Mesin Pencarian');
    while (!search) {
        search = prompt('Harus masukkan sesuatu');
    };
    alert('Pesan anda kami terima');
});

// Generate random color 
const eye = document.querySelector('#eye');

eye.addEventListener('click', () => {
    document.body.style.backgroundColor = generateRandomColor();
})

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

// Memunculkan heading menggunakan interval
// const tittle = "Selamat Datang";
// const heading = document.querySelector('#heading');
// let count = 0;

// const interval = setInterval(() => {
//     if(count == tittle.length) {
//         count = 0;
//         heading.innerText = "";
//     } else {
//         heading.innerText += tittle[count];
//         count++;
//     }
// }, 200);

