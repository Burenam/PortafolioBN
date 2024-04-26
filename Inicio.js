document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del navbar
    const perfilLink = document.querySelector('.nav-links li:nth-child(1) a');
    const serviciosLink = document.querySelector('.nav-links li:nth-child(2) a');
    const proyectosLink = document.querySelector('.nav-links li:nth-child(3) a');
    const contactoLink = document.querySelector('.nav-links li:nth-child(4) a');

    // Obtener elementos de los divs correspondientes
    const herramientasDiv = document.querySelector('.ani-container');
    const proyectosDiv = document.querySelector('.carousel');
    const contactoDiv = document.querySelector('.container-contacto');

    // Event listener para la opción "Mi Perfil"
    perfilLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Desplazar la página hacia el inicio
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Event listener para la opción "Servicios"
    serviciosLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Desplazar la página hacia el div de herramientas
        herramientasDiv.scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Event listener para la opción "Proyectos"
    proyectosLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Desplazar la página hacia el div de proyectos
        proyectosDiv.scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Event listener para la opción "Contacto"
    contactoLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Desplazar la página hacia el div de contacto
        contactoDiv.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



//-------------------------------------------------------------------------------------------

// TRADUCTOR

// Función para cambiar el idioma
function toggleLanguage() {
    const content = document.getElementById("content");
    const navbar = document.querySelector(".navbar");
    const languageSwitch = document.getElementById("languageSwitch");

    // Verifica el estado del interruptor
    if (languageSwitch.checked) {
        // Traduce el contenido al inglés
        translateContent(content, "en");
        translateNavbar(navbar, "en");
    } else {
        // Traduce el contenido al español
        translateContent(content, "es");
        translateNavbar(navbar, "es");
    }
}

// Función para traducir el contenido
function translateContent(content, targetLanguage) {
    // Obtiene todos los elementos de texto dentro del contenedor
    const textElements = content.querySelectorAll("h1, p, a:not(:has(img)), span, h2, button, label, input, .introduce .title, .introduce .topic, .introduce .des");

    // Itera sobre cada elemento y traduce su contenido
    textElements.forEach(element => {

        // Verifica si el elemento es el span con la clase whatsapp-icon
        if (element.tagName.toLowerCase() === 'span' && element.classList.contains('whatsapp-icon')) {
            return; // Omite el elemento
        }

        // Verifica si el elemento es el botón de WhatsApp
        if (element.closest('.whatsapp-button')) {
            return; // Omite el elemento
        }

        const textToTranslate = element.textContent;

        // Realiza la traducción usando la API de Google Translate
        fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURI(textToTranslate)}`)
            .then(response => response.json())
            .then(data => {
                // Actualiza el contenido traducido
                const translatedText = data[0][0][0];
                element.textContent = translatedText;
            })
            .catch(error => console.error("Error al traducir:", error));
    });
}

// Función para traducir el navbar
function translateNavbar(navbar, targetLanguage) {
    // Obtiene todos los enlaces dentro del navbar
    const linkElements = navbar.querySelectorAll(".nav-links li a:not(:has(img))");

    // Itera sobre cada enlace y traduce su texto
    linkElements.forEach(link => {
        const textToTranslate = link.textContent;

        // Realiza la traducción usando la API de Google Translate
        fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURI(textToTranslate)}`)
            .then(response => response.json())
            .then(data => {
                // Actualiza el texto traducido del enlace
                const translatedText = data[0][0][0];
                link.textContent = translatedText;
            })
            .catch(error => console.error("Error al traducir:", error));
    });
}

// Traducción inicial al español
toggleLanguage();

// TRADUCTOR

//-------------------------------------------------------------------------------------------

// SCROLLTOP

document.addEventListener("DOMContentLoaded", function() {
    var scrollTopButton = document.getElementById("scrollTopButton");

    // Mostrar el botón cuando el usuario haga scroll hacia abajo
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });

    // Hacer scroll al principio de la página cuando se hace clic en el botón
    scrollTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Scroll suave
        });
    });
});

// SCROLLTOP

//-------------------------------------------------------------------------------------------

// DESCARGA

document.getElementById("downloadCVSpanish").addEventListener("click", function() {
    // Descargar el CV en español
    window.open('Documentos/CV_Espanol.pdf', '_blank');
});

document.getElementById("downloadCVEnglish").addEventListener("click", function() {
    // Descargar el CV en inglés
    window.open('Documentos/CV_Ingles.pdf', '_blank');
});

// DESCARGA

//-------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------

// CONTACTO

// Inicializa EmailJS con tu Public Key
emailjs.init('uv24-4wtcIf-Upy4C');

// Maneja el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtiene los valores del formulario
    var from_name = document.getElementById('from_name').value;
    var to_name = "Braylie Ureña";
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var message1 = document.getElementById('message1').value;

    message = message1+ " Correo electronico: " + email + " Numero Telefonico: " + number;

    // Imprime los valores de los parámetros por consola
    console.log('from_name:', from_name);
    console.log('to_name:', to_name);
    console.log('message:', message);


    // Envía el correo electrónico utilizando EmailJS
    emailjs.send('service_69g25n7', 'template_nge53nf', {
        from_name: from_name,
        to_name: to_name,
        message: message
    }).then(function(response) {
        console.log('Correo electrónico enviado:', response);
        alert('¡Mensaje enviado con éxito!');
        // Limpia los campos del formulario después del envío
        document.getElementById('from_name').value = '';
        document.getElementById('to_name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('number').value = '';
        document.getElementById('message1').value = '';
    }, function(error) {
        console.error('Error al enviar el correo electrónico:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    });
});

// CONTACTO

//-------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------

// CARRUSEL

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = redirectToGitHub; // Llama directamente a redirectToGitHub cuando se hace clic en el botón
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}

function redirectToGitHub() {
    window.location.href = "https://github.com/Burenam/PortafolioBraylieUre-a";
}




// Establece el intervalo en milisegundos (por ejemplo, 5 segundos)
const intervaloNormal = 250000; // Intervalo normal
const intervaloHover = 227000; // Intervalo cuando el cursor está sobre el carrusel

// Función para avanzar al siguiente slider automáticamente
function autoNextSlider() {
    // Llama a la función showSlider con 'next' como argumento para mostrar el siguiente slider
    showSlider('next');
}

// Configura el intervalo para llamar a autoNextSlider cada cierto tiempo
let autoSliderInterval = setInterval(autoNextSlider, intervaloNormal);

// Función para reducir la velocidad del carrusel cuando el cursor está sobre él
function reduceSpeed() {
    clearInterval(autoSliderInterval); // Detiene el intervalo actual
    autoSliderInterval = setInterval(autoNextSlider, intervaloHover); // Establece un intervalo más largo
}

// Función para restablecer la velocidad del carrusel cuando el cursor se aleja
function resetSpeed() {
    clearInterval(autoSliderInterval); // Detiene el intervalo actual
    autoSliderInterval = setInterval(autoNextSlider, intervaloNormal); // Restablece el intervalo normal
}

// Reduce la velocidad del carrusel cuando el cursor está sobre él
carousel.addEventListener("mouseenter", reduceSpeed);

// Restablece la velocidad del carrusel cuando el cursor se aleja
carousel.addEventListener("mouseleave", resetSpeed);

// Inicia el carrusel automáticamente al cargar la página
window.addEventListener('load', () => {
    autoNextSlider();
});

// CARRUSEL

//-------------------------------------------------------------------------------------------

// Función para verificar si el elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para activar la animación cuando el héroe está visible
function activateAnimation() {
    const heroContent = document.querySelector(".hero-content");

    if (isInViewport(heroContent)) {
        // Si el contenido del héroe está visible, añade la clase 'show' para activar la animación
        heroContent.classList.add("show");
        // Establece la duración de la animación en 0.5 segundos
        heroContent.style.animationDuration = "0.10s";
    } else {
        // Si el contenido del héroe no está visible, elimina la clase 'show' para detener la animación
        heroContent.classList.remove("show");
        // Reinicia la duración de la animación
        heroContent.style.animationDuration = null;
    }
}

// Ejecuta la función al cargar la página y al desplazarse la página
window.addEventListener("load", activateAnimation);
document.addEventListener("scroll", activateAnimation);

// CARRUSEL

//-------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------

// ANIMACION HERO

// Función para verificar si el elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para activar la animación cuando las herramientas están visibles
function activateToolsAnimation() {
    const toolsContainer = document.querySelector(".tools-container");

    if (isInViewport(toolsContainer)) {
        // Si el contenedor de herramientas está visible, añade la clase 'show' para activar la animación
        toolsContainer.classList.add("show");
    } else {
        // Si el contenedor de herramientas no está visible, elimina la clase 'show' para detener la animación
        toolsContainer.classList.remove("show");
    }
}

// Ejecuta la función al cargar la página y al desplazarse la página
window.addEventListener("load", activateToolsAnimation);
document.addEventListener("scroll", activateToolsAnimation);

// ANIMACION HERO

//-------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------

// ANIMACION ANI-CONTAINER

// Función para activar el tools-container y slider2 según el desplazamiento
function activateContainers() {
    const slider2 = document.querySelector(".slider2");
    const toolsContainer = document.querySelector(".tools-container");
    const isInViewSlider2 = isInViewport(slider2);

    // Función para mostrar el tools-container después de 5 segundos
    function showToolsContainer() {
        toolsContainer.classList.remove("hide");
    }

    if (isInViewSlider2) {
        // Si el slider2 está completamente visible, activa el slider2 y desactiva el tools-container
        slider2.classList.add("show");
        // Mostrar el tools-container después de 5 segundos
        setTimeout(showToolsContainer, 200);
        // Ocultar el tools-container después de 30 segundos
        setTimeout(() => {
            toolsContainer.classList.add("hide");
        }, 50000);
    } else {
        // Si el slider2 ya no está completamente visible, desactiva el slider2 y activa el tools-container
        slider2.classList.remove("show");
        // Ocultar el tools-container después de 30 segundos si no se activa el slider2
        setTimeout(() => {
            toolsContainer.classList.add("hide");
        }, 50000);
    }
}

// Escucha el evento de desplazamiento para activar los contenedores
window.addEventListener("scroll", activateContainers);
//-------------------------------------------------------------------------------------------

// ANIMACION ANI-CONTAINER


// Función para activar la animación cuando el ani-container está visible
function activateAniContainerAnimation() {
    const aniContainer = document.querySelector(".ani-container");

    if (isInViewport(aniContainer)) {
        // Si el ani-container está visible, añade la clase 'show' para activar la animación
        aniContainer.classList.add("show");
    } else {
        // Si el ani-container no está visible, elimina la clase 'show' para detener la animación
        aniContainer.classList.remove("show");
    }
}

// Ejecuta la función al cargar la página y al desplazarse la página
window.addEventListener("load", activateAniContainerAnimation);
document.addEventListener("scroll", activateAniContainerAnimation);

// ANIMACION ANI-CONTAINER


// Función para desactivar la animación del tools-container
function disableToolsContainerAnimation() {
    const toolsContainer = document.querySelector(".tools-container");
    // Elimina la clase que activa la animación
    toolsContainer.classList.remove("animation-class");
}

// Verifica el tamaño inicial de la pantalla
if (window.innerWidth <= 600) {
    // Si el tamaño inicial es 600px o menos, desactiva la animación
    disableToolsContainerAnimation();
}

// Escucha el evento de cambio de tamaño de la pantalla
window.addEventListener("resize", function() {
    // Verifica si el ancho de la pantalla es máximo 600px
    if (window.innerWidth <= 600) {
        // Si es así, llama a la función para desactivar la animación
        disableToolsContainerAnimation();
    }
});
//-------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------


// Función para activar la animación cuando el carrusel está visible
function activateCarouselAnimation() {
    const carousel = document.querySelector(".carousel");

    if (isInViewport(carousel)) {
        // Si el carrusel está visible, añade la clase 'show' para activar la animación
        carousel.classList.add("show");
    } else {
        // Si el carrusel no está visible, elimina la clase 'show' para detener la animación
        carousel.classList.remove("show");
    }
}

// Ejecuta la función al cargar la página y al desplazarse la página
window.addEventListener("load", activateCarouselAnimation);
document.addEventListener("scroll", activateCarouselAnimation);

