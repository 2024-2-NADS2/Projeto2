
// Função do slider principal para automaziar as imagens
let count = 1;
document.getElementById("radio1").checked = true;

//Intervalo de tempo entre cada imagem
setInterval(function(){
    nextImage();
}, 4000)

//Funçao de loop 
function nextImage(){
    count++;
    if(count>5){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}

//Função para o card slide de eventos variados
new Swiper('.card-wrapper', {
    loop: false,
    spaceBetween: 30,

    // Setas de navegaçao
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Breakpoints para responsividade
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
});


