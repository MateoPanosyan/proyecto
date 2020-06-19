let queryString = new URLSearchParams(location.search);
let codigo = queryString.get('id')

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/artist/';

let id = url + codigo
let urlTops = id + '/top'

fetch(id)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){
        console.log(resultado)
        let h2 = document.querySelector(".nombre")
        let seguidores = document.querySelector(".seguidores")
        let fotoArtista = document.querySelector(".foto-artista")

        h2.innerHTML += resultado.name
        seguidores.innerHTML += resultado.nb_fan + " Seguidores"  
        fotoArtista.src = resultado.picture_big
    })
    .catch(function(error){
        console.log(error)
    });


fetch(urlTops)
.then(function(response){
    return response.json();
})
.then(function(datos){
    console.log(datos)
    let top = document.querySelector('.top-canciones');
    let nombre = datos.data;

    nombre.forEach(function(track){
        top.innerHTML += '<li class="info">' + '<a href="track.html?id=' + track.id + '"><img src="' + track.album.cover + '" class="portadas">' + '</a> <a href="track.html?id=' +  track.id + '">' + track.title + '</a></li>'
    })
})