// Modal para ver más fotos de un producto
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.getElementsByClassName('close')[0];
    const productImages = document.querySelectorAll('.categoria-imagen');

    productImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.style.backgroundImage.slice(5, -2);
        });
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

// Menú Hamburguesa
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const mobileNav = document.querySelector(".mobile-nav");

    hamburgerIcon.addEventListener("click", () => {
        mobileNav.style.display = mobileNav.style.display === "block" ? "none" : "block";
    });
});
