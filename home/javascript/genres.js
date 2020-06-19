let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/genre';


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos)
        let top = document.querySelector('.generos');
        let nombre = datos.data;

        nombre.forEach(function(genero){
            top.innerHTML += '<li class="info">' + '<a href="#"><img src="' + genero.picture_small + '" class="portadas">' + '</a> <a href="#' + genero.id + '">' + genero.name + '</a></li>'
        })
    })
    .catch(function(error){
        console.log(error);
    })