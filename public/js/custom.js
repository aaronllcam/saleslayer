const imgServiceOne = document.getElementById('img-service-one');
const imgServiceTwo = document.getElementById('img-service-two');
window.onscroll = () => {
    if(window.scrollY > 450){
        imgServiceOne.classList.add("animate-slideinup");
        imgServiceOne.classList.remove("d-none");

        imgServiceTwo.classList.add("animate-slideinup");
        imgServiceTwo.classList.remove("d-none");
    }
}


$('.select').on('click', () =>{
    $('.content-select ul').toggle("slow");
})


const showPartners = () => {

    const categories = document.querySelectorAll("#select-list > li");
    const partners = document.querySelectorAll("#brand > div");

    for (category of categories) {
        //Asignamos a cada li de la lista del select el evento que escucha el click! 
        category.addEventListener("click", function(e){
            let category = e.target.dataset.category;

            //Añadimos la clase active al elemento clicado y removemos dicha clase de los ptros elementos
            for (categ of categories){
                if(category == categ.dataset.category){
                    categ.classList.add("active");
                }else{
                    categ.classList.remove("active");
                }
            }
            //recorremos los partnerns y si pertenecen a dicha categoría los mostramos con el estilo en liena flex, al resto los escondemos
            for (const partner of partners) {
                if(category != partner.dataset.category){
                    partner.style.display = "none";
                }
                if(category == partner.dataset.category){
                    partner.style.display = "flex";
                }
                if(category == "all"){
                    partner.style.display = "flex";
                }
            }
        });

    }
}

showPartners();

/* validate form */


/* end validate form */
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
    if(e.target.value.trim().length > 0 && validateName(e.target.value.trim())){
        formIsValid.name = true;
    }    
})

surname.addEventListener('change', (e) => {
    console.log(e.target.value.trim().length);

    if(e.target.value.trim().length > 0 && validateName(e.target.value.trim())){
        formIsValid.surname = true;
    }
})

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0 && validateEmail(e.target.value.trim())){
        formIsValid.email = true;
    }
})
company.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0){
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
    if(valid == -1) form.submit();
    else{
        const errorName = document.getElementById("error-name");
        const errorSurname = document.getElementById("error-surname");
        const errorEmail = document.getElementById("error-email");
        const errorCompany = document.getElementById("error-company");
        const errorTerms = document.getElementById("error-terms");
        
        if(formIsValid.name == false){
            errorName.classList.remove("d-none");
         }else{
            errorName.classList.add("d-none");  
         }
         if(formIsValid.surname == false){
             errorSurname.classList.remove("d-none");

         }else{
            errorSurname.classList.add("d-none");

         }
         if(formIsValid.email == false){
             errorEmail.classList.remove("d-none");

         }else{
            errorEmail.classList.add("d-none");

         }
         if(formIsValid.company == false){
             errorCompany.classList.remove("d-none");
             
        }else{
            errorCompany.classList.add("d-none");

        }
        if(formIsValid.terms == false){
            errorTerms.classList.remove("d-none");

        }else{
            errorTerms.classList.add("d-none");
        }
            
    } 

    
}

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email)) return true;
    else return false;
}
const validateName = (name) => {
    const nameRegex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/

    if(nameRegex.test(name)) return true;
    else return false;
}
