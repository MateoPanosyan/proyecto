let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

let playlistWrapper = document.querySelector('.playlistWrapper');
console.log(recuperoStorage);
if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    playlistWrapper.innerHTML += '<li> No hay canciones en tu playlist </li>'
    console.log(playlistWrapper);
    
} else {

    playlist.forEach(function(idTrack){
        buscarYMostrarTrack(idTrack);
    });
}

function buscarYMostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + idTrack;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            playlistWrapper.innerHTML += '<li>' + '<a href="track.html?id=' + track.id + '">' + track.title + '</a></li>' 
        })
        .catch(function(errors){
            console.log(errors);
            
        })
};
