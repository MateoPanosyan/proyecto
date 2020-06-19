const carouselSlide = document.querySelector ('.carousel-slide');
const carouselImages = document.querySelectorAll ('.carousel-slide img');


const prevBtn = document.querySelector ('#prevBtn');
const nextBtn = document.querySelector ('#nextBtn');


let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if (counter >= carouselImages.length  - 1) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if (counter <=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})



//TOPS
let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/chart/0/tracks";

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        
        let tracks = document.querySelector('.tracks');
        let resultados = datos.data;

        resultados.forEach(function(track){
            tracks.innerHTML += '<li class="class">' + '<a href="track.html?id='+ track.id+ '">'+ track.title + '</a></li>' 
        })

    })
    .catch(function(error){
        console.log(error);
        
    })