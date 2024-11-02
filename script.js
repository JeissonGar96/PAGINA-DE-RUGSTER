// Modal para ver más fotos de un producto
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close'); // Cambiado para usar querySelector
    const productImages = document.querySelectorAll('.categoria-imagen');

    productImages.forEach(img => {
        img.addEventListener('click', () => {
            // Extraer la URL de la imagen de fondo
            const imgUrl = img.style.backgroundImage.slice(5, -2);
            modal.style.display = 'block';
            modalImg.src = imgUrl; // Asignar la URL a la imagen modal
        });
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

// Menú hamburguesa con animación desde el lado izquierdo
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".close-btn");

    // Alternar clase para mostrar el menú
    hamburgerIcon.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
    });

    // Cerrar el menú al hacer clic en el botón de cierre
    closeBtn.addEventListener("click", () => {
        mobileNav.classList.remove("open");
    });

    // Cerrar el menú al hacer clic fuera de él
    window.addEventListener("click", (event) => {
        if (!mobileNav.contains(event.target) && event.target !== hamburgerIcon) {
            mobileNav.classList.remove("open");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector(".search-icon");
    const searchModal = document.getElementById("searchModal");
    const closeSearch = document.querySelector(".close-search");

    searchIcon.addEventListener("click", () => {
        searchModal.style.display = "flex";
    });

    closeSearch.addEventListener("click", () => {
        searchModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === searchModal) {
            searchModal.style.display = "none";
        }
    });
});

