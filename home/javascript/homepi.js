
//TOP tracks
let proxy = 'https://cors-anywhere.herokuapp.com/';
let dataTracks = proxy + "https://api.deezer.com/chart/0/tracks";

fetch(dataTracks)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        // console.log(datos);
        
        let tracks = document.querySelector('.tracks');
        let resultados = datos.data;

        resultados.forEach(function(track){
            tracks.innerHTML += '<li class="class">' + '<a href="track.html?id='+ track.id+ '">'+ track.title + '</a></li>' 
        })

    })
    .catch(function(error){
        console.log(error);
        
    })

//TOP artist
let dataArtists = proxy + "https://api.deezer.com/chart/0/artists";

fetch(dataArtists)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);

        let artists = document.querySelector('.artists');
        let resultados = datos.data;

        resultados.forEach(function (artist) {
            artists.innerHTML += '<li class="class">' + '<a href="artist.html?id=' + artist.id + '">' + artist.name + '</a></li>'
        })

    })
    .catch(function (error) {
        console.log(error);

    })    

//TOP album
let dataAlbums = proxy + "https://api.deezer.com/chart/0/albums";

fetch(dataAlbums)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);

        let albums = document.querySelector('.albums');
        let resultados = datos.data;

        resultados.forEach(function (album) {
            albums.innerHTML += '<li class="class">' + '<a href="album.html?id=' + album.id + '">' + album.title + '</a></li>'
        })

    })
    .catch(function (error) {
        console.log(error);

    })    