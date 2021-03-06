/* SlideInUP effect */
/* Programamos para que cuando el scroll llegue a la sección de servicios se lance la animación*/
const imgServiceOne = document.getElementById('img-service-one');
const imgServiceTwo = document.getElementById('img-service-two');
window.onscroll = () => {
    if (window.scrollY > 450) {
        imgServiceOne.classList.add("animate-slideinup");
        imgServiceOne.classList.remove("d-none");

        imgServiceTwo.classList.add("animate-slideinup");
        imgServiceTwo.classList.remove("d-none");
    }
}
/* End SlideInUP effect */

/* Code Select from partners */
/* Cuando hacemos click sobre el select desplegará la lista con las categorías */
$('.select').on('click', () => {
    $('.content-select ul').toggle("slow");
})

/* Esta función muestra los partners que pertencen a la categoria seleccionada en la lista de categorias desplegada
del select */
const showPartners = () => {

    const categories = document.querySelectorAll("#select-list > li");
    const partners = document.querySelectorAll("#brand > div");

    for (category of categories) {
        //Asignamos a cada li de la lista del select el evento que escucha el click! 
        category.addEventListener("click", function (e) {
            let category = e.target.dataset.category;

            //Añadimos la clase active al elemento clicado y removemos dicha clase de los otros elementos
            for (categ of categories) {
                if (category == categ.dataset.category) {
                    categ.classList.add("active");
                } else {
                    categ.classList.remove("active");
                }
            }
            //Recorremos los partnerns y si pertenecen a dicha categoría los mostramos con el estilo en linea flex, el resto los escondemos
            for (const partner of partners) {
                if (category != partner.dataset.category) {
                    partner.style.display = "none";
                }
                if (category == partner.dataset.category) {
                    partner.style.display = "flex";
                }
                if (category == "all") {
                    partner.style.display = "flex";
                }
            }
        });

    }
}
/* End Code Select from partners */

/* mock json */
/* En esta sección hemos pretendido simular un response de una API.
    Imaginemos que la API nos devueve un JSON con la información de los partners tal y como muestro a continuación.
    Y con esta información vamos a construir de manera dinámica los elementos que ese mostraran en la sección de partners 
    y las ventanas modales asociadas a dichos partners.
    Podemos comentar, que esto lo podriamos hacer de manera estática y programarlo con los datos que nos llegan del backend
    directamente incidiendo sobre el html mediante html enriquecido con php(por ejemplo con blade) o javascript si se diera el caso.
*/
const partners = [
    {
        name: "3dids",
        type: "Affiliate Partner",
        country: "España",
        title: "Tu estrategia de transformación digital",
        description: "En 3dids contamos con más de 14 años de experiencia, más de 35 profesionales y más de 55 marcas internacionalizadas. Somos una empresa de transformación digital enfocada en negocios y resultados. Ayudamos a las marcas y las organizaciones a crecer en todos los sectores, nacionales e internacionales. Juntos lo hacemos realidad.",
        web: "https://www.3dids.com/",
        imagePath: "./public/images/brand/logo-3dids.png"
    },
    {
        name: "Barnesshirley",
        type: "Solution Partner",
        country: "Reino Unido",
        title: "Accede al poder de la gestión de información de producto",
        description: "Ayudamos a negocios a crear su ecosistema digital y optimizarlo a través del marketing digital, ecommerce y sistemas back-end. Nuestro trabajo se enfoca a conseguir más y mejores ventas online. La clave de éxito de una estrategia de ecommerce y lanzamiento a mercado es contar con información de producto completa y precisa.",
        web: "https://barnesandshirley.co/",
        imagePath: "./public/images/brand/logo-barnesshirley.png"
    },
    {
        name: "Gtd360",
        type: "Solution Partner",
        country: "España",
        title: "Innovación y desarrollo como esencia",
        description: "Ofrecemos soluciones a nivel de desarrollo, transformación tecnológica y gestión de logística y almacenes. Buscamos soluciones específicas para cada cliente, cuidando hasta el más mínimo detalle. GTD360 está formado por un equipo de profesionales que aplican todos sus conocimientos y habilidades a tu servicio.",
        web: "https://gtd360.es/",
        imagePath: "./public/images/brand/logo-gtd360.png"
    }
];

/* end mock json */

/* Dinamic render partners whitin index.html  */
/*  renderPartners nos renderiza "pinta" los partners del JSON que viene de la API en la sección partners*/
const renderPartners = (partners) => {
    const brandSection = document.getElementById("brand");
    let partnerCont = 0;
    let partnersHtml = "";

    for (const partner of partners) {

        partnersHtml += `<div id="brand-${partnerCont}" class="brand_icon" data-category="${partner.type}">`;
        partnersHtml += `<img src="${partner.imagePath}" alt="${partner.name}">`;
        partnersHtml += `</div>`
        partnerCont++;

    }
    brandSection.insertAdjacentHTML("beforeend", partnersHtml);
}
/* End Dinamic render partners whitin index.html  */


/* Partners modal window PopUP functionality render Partners modal window function*/
/* renderModalPartners nos renderiza "pinta" las ventanas modales a partir de los datos renderizados en la sección partners */
const renderModalPartners = (partners) => {
    const logos = document.getElementsByClassName('brand_icon');
    const close = document.getElementById('modal-close');
    const customModal = document.getElementById('customModal');
    let cont = 0;

    for (const logo of logos) {

        let modalHtml = "";
        modalHtml += `<div id="partner-brand-${cont}" class="modal-window d-none">`;
        modalHtml += '<div class="modal-content container">';
        modalHtml += `<div class="modal-content_header"><a id="modal-close-brand-${cont}" href="#">X</a><img src="${partners[cont].imagePath}" alt="${partners[cont].name}"></div>`;
        modalHtml += '<div class="modal-content_body">';
        modalHtml += '<div class="tags">';
        modalHtml += '<a href="#">';
        modalHtml += '<img src="../../public/images/icons/icons_affiliate-partner_simple_1.png" alt="Solution partner">';
        modalHtml += `${partners[cont].type}`;
        modalHtml += '</a>';
        modalHtml += '<a href="#">';
        modalHtml += '<img src="../../public/images/icons/location.png" alt="Location">';
        modalHtml += `${partners[cont].country}`;
        modalHtml += '</a>';
        modalHtml += '</div>';
        modalHtml += '<h2 id="modal-title">';
        modalHtml += `${partners[cont].title}</h2>`;
        modalHtml += `<p>${partners[cont].description}</p>`;
        modalHtml += `<a href="${partners[cont].web}" class="btn btn-default">Ver web</a>`;
        modalHtml += '</div>';
        modalHtml += '<div class="circle-decorator"></div>';
        modalHtml += '<div class="close-decorator"></div>';
        modalHtml += '<div class="yellow-decorator"></div>';
        modalHtml += '</div></div>'


        logo.addEventListener('click', () => {

            const modalWindow = document.getElementById(`partner-${logo.id}`);
            const close = document.getElementById(`modal-close-${logo.id}`);

            close.addEventListener('click', (e) => {
                e.preventDefault();
                const modalWindow = document.getElementById(`partner-${logo.id}`);
                modalWindow.classList.add('d-none');
            })
            modalWindow.classList.remove('d-none');
        });

        customModal.insertAdjacentHTML("beforeend", modalHtml);
        cont++;

    }
}
/* End render Partners modal window function*/

/* Llamamos a las tres funciones para implementar la funcionalidad deseada */
renderPartners(partners);
renderModalPartners(partners);
showPartners();



/* validate form */
/* en esta parte he realizado un pequeño código de validación de formulario,
aunque cabe destacar que podemos usar un plugin con mayor funcionalidad */
const form = document.getElementById("home-form");
const button = document.getElementById("form-button");


const name = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const company = document.getElementById("company");
const terms = document.getElementById("checkbox");

const formIsValid = {
    name: false,
    surname: false,
    email: false,
    company: false,
    terms: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})

name.addEventListener('change', (e) => {
    console.log(e.target.value.trim().length);
    if (e.target.value.trim().length > 0 && validateName(e.target.value.trim())) {
        formIsValid.name = true;
    }
})

surname.addEventListener('change', (e) => {
    console.log(e.target.value.trim().length);

    if (e.target.value.trim().length > 0 && validateName(e.target.value.trim())) {
        formIsValid.surname = true;
    }
})

email.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0 && validateEmail(e.target.value.trim())) {
        formIsValid.email = true;
    }
})
company.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) {
        formIsValid.company = true;
    }
})

terms.addEventListener('change', (e) => {
    console.log(e.target.checked);
    formIsValid.terms = e.target.checked;
    e.target.checked ? button.removeAttribute('disable') : button.removeAttribute('disable', true);
})

const validateForm = () => {
    console.log(formIsValid);
    const fomValues = Object.values(formIsValid);
    const valid = fomValues.findIndex(value => value == false);
    if (valid == -1) form.submit();
    else {
        const errorName = document.getElementById("error-name");
        const errorSurname = document.getElementById("error-surname");
        const errorEmail = document.getElementById("error-email");
        const errorCompany = document.getElementById("error-company");
        const errorTerms = document.getElementById("error-terms");

        if (formIsValid.name == false) {
            errorName.classList.remove("d-none");
        } else {
            errorName.classList.add("d-none");
        }
        if (formIsValid.surname == false) {
            errorSurname.classList.remove("d-none");

        } else {
            errorSurname.classList.add("d-none");

        }
        if (formIsValid.email == false) {
            errorEmail.classList.remove("d-none");

        } else {
            errorEmail.classList.add("d-none");

        }
        if (formIsValid.company == false) {
            errorCompany.classList.remove("d-none");

        } else {
            errorCompany.classList.add("d-none");

        }
        if (formIsValid.terms == false) {
            errorTerms.classList.remove("d-none");

        } else {
            errorTerms.classList.add("d-none");
        }

    }


}

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailRegex.test(email)) return true;
    else return false;
}
const validateName = (name) => {
    const nameRegex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/

    if (nameRegex.test(name)) return true;
    else return false;
}
/* end validate form */

