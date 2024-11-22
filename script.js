document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.getElementById('navLinks');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    // Close any open dropdown when the mouse leaves the nav area
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });

    // Show dropdown on hover
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });
    });

    // Toggle menu for smaller screens
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
