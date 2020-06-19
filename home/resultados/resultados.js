let queryString = location.search; 
console.log(queryString);

let queryStringObj = new URLSearchParams(queryString);
console.log(queryStringObj);
let search = queryStringObj.get('search'); 
console.log(search);

let proxy = "https://cors-anywhere.herokuapp.com/";
let url =  proxy + 'https://api.deezer.com/search/artist?q=' + search;
console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let lista = document.querySelector('.resultadoartistas');
        let resultados = datos.data;
        
        resultados.forEach(function(resultado){
            lista.innerHTML += '<li><a class="result" href="detail.html?id=' + resultado.id + '">' + resultado.name + '</a></li>';
        });
       console.log(datos)

       })
        
        

    .catch(function(error){
        console.log(error);
        
    });


let urltrack =  proxy + 'https://api.deezer.com/search/track?q=' + search;
console.log(urltrack);

fetch(urltrack)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let lista = document.querySelector('.resultadocanciones');
        let resultados = datos.data;
        
        resultados.forEach(function(resultado) {
            lista.innerHTML += '<li>' + resultado.title + '</li>';
        });
       console.log(datos)

       })
        
        

    .catch(function(error){
        console.log(error);
        
    });

    let urlalbum =  proxy + 'https://api.deezer.com/search/album?q=' + search;
console.log(urlalbum);

fetch(urlalbum)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let lista = document.querySelector('.resultadoalbum');
        let resultados = datos.data;
        
        resultados.forEach(function(resultado){
            lista.innerHTML += '<li><a class="result" href="detail.html?type=' + resultado.type + '&id=' + resultado.id + '">' + resultado.title + '</a></li>';
        });
       console.log(datos)

       })
        
        

    .catch(function(error){
        console.log(error);
        
    });

