document.addEventListener("DOMContentLoaded", () => {
    // Configuración del slider en la sección "Conoce nuestros espacios"
    const slider = document.querySelector(".slider");

    if (slider) {
        let scrollAmount = 0;

        function autoScroll() {
            scrollAmount += 2;
            slider.scrollLeft = scrollAmount;

            if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
                scrollAmount = 0;
            }
        }

        let autoScrollInterval = setInterval(autoScroll, 30);

        // Detener el autoscroll cuando el ratón está sobre el slider
        slider.addEventListener("mouseover", () => clearInterval(autoScrollInterval));
        slider.addEventListener("mouseout", () => {
            autoScrollInterval = setInterval(autoScroll, 30);
        });

        // Limpiar el intervalo al salir de la página
        window.addEventListener("beforeunload", () => clearInterval(autoScrollInterval));
    } else {
        console.warn("No se encontró el contenedor del slider.");
    }

    // Animaciones hover en los elementos del menú
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.2)";
            item.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
            item.style.transition = "transform 0.3s ease, background-color 0.3s ease, border-radius 0.3s ease";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
            item.style.backgroundColor = "transparent";
            item.style.borderRadius = "50%"; // Restaurar forma de nube
        });
    });

    // Centrar títulos en todas las secciones
    const titles = document.querySelectorAll("h2");
    titles.forEach((title) => {
        title.style.textAlign = "center";
        title.style.color = "#ff77a9"; // Color pastel para los títulos
    });

    // Ajustar la alineación de imágenes y tamaños
    const activityItems = document.querySelectorAll(".actividades-container .actividad-item");
    const personalItems = document.querySelectorAll(".person-container .person");
    const newsItems = document.querySelectorAll(".news-container .news-item");

    activityItems.forEach((item) => {
        item.style.flex = "1 1 150px";
    });

    personalItems.forEach((item) => {
        item.style.flex = "1 1 150px";
    });

    newsItems.forEach((item) => {
        item.style.flex = "1 1 150px";
    });

    // *** Configuración específica para la página "que-hacemos.html" ***
    // Aplicar estilos dinámicos a la sección de historia
    const historySection = document.querySelector("#historia .history");
    if (historySection) {
        historySection.style.animation = "fadeIn 2s ease-in-out";
    }

    // Animaciones hover para los elementos del personal
    const personalItemsQueHacemos = document.querySelectorAll("#personal .personal-item");
    personalItemsQueHacemos.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.05)";
            item.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
            item.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
            item.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block"; // Mostrar el modal
    modalImg.src = img.src; // Establecer la imagen del modal
    captionText.innerHTML = img.alt; // Establecer texto alternativo como título
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Ocultar el modal
}
