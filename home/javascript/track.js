let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/track/" + idTrack

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);


        let titulo = document.querySelector('.titulo');
        titulo.innerHTML += datos.title;
        
        let interprete = document.querySelector('.interprete');
        interprete.innerHTML += '<a href="artist.html?id='+ datos.artist.id+ '">'+ datos.artist.name +'</a>'
        
        let album = document.querySelector('.album');
        album.innerHTML += '<a href="album.html?id=' + datos.album.id + '">' + datos.album.title + '</a>'


        let player = document.querySelector('iframe');
        player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1'

        
    })
    .catch(function (error) {
        console.log(error);

    })    




let recuperoStorage = localStorage.getItem('playlist');


if(recuperoStorage == null){

    playlist = [];
} else {

    playlist = JSON.parse(recuperoStorage);
}


if(playlist.includes(idTrack)){
    document.querySelector('.agregar').innerHTML = "Quitar de la playlist";
}


let agregar = document.querySelector('.agregar');

agregar.addEventListener('click', function(e){

    e.preventDefault();

    if(playlist.includes(idTrack)){

        let indiceEnElArray = playlist.indexOf(idTrack);
        playlist.splice(indiceEnElArray, 1);
        document.querySelector('.agregar').innerHTML = "Agregar a playlist";
        console.log(playlist);
        
    } else { 

        playlist.push(idTrack);
        document.querySelector('.agregar').innerHTML = "Quitar de la playlist"
    }




    let playlistParaStorage = JSON.stringify(playlist);
    localStorage.setItem('playlist', playlistParaStorage);
    console.log(localStorage);


})