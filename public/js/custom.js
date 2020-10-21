
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