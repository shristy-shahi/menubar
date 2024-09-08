
document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle('show');
    });
});


document.querySelectorAll('.dropdown-menu a').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = item.parentNode;
        dropdownMenu.classList.remove('show');
    });
});