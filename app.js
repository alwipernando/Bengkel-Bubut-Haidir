// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
// Ketika hamburger menu di click
hamburgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

// Click di luar sidebar untuk menghilangkan nav
document.addEventListener('click', (e) => {
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    };
}); 

// Kolom pencarian
const search = document.querySelector('#search');
search.addEventListener('click', () => {
    search = prompt('Mesin Pencarian');
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

