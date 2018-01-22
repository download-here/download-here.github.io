function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    console.log(decodeURIComponent(results[2].replace(/\+/g, " ")));
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$( document ).ready(function() {
	// Target Main Div
	var mainDiv = document.getElementById('song-container');
	// Get Artist
	var artist = getParameterByName('artist');
	// Get Artist Song Length
	var artistSongLength = Object.keys(library[artist]).length-1;

	var h1Title = document.createElement('h1');
	h1Title.setAttribute('id','artist');
	h1Title.innerHTML = library[artist]['title'];
	mainDiv.appendChild(h1Title);


	for(let i = 0; i < artistSongLength; i++){
		var song = 'song' + (i + 1);

		var div = document.createElement('div');
		div.setAttribute('class','song-section');
		mainDiv.appendChild(div);

		var songTitle = document.createElement('h2');
		songTitle.setAttribute('class','song-title');
		songTitle.innerHTML = library[artist][song]['name'];
		div.appendChild(songTitle);

		var songArtist = document.createElement('p');
		songArtist.setAttribute('class','song-artist');
		songArtist.innerHTML = "by " + library[artist][song]['artist'];
		div.appendChild(songArtist);

		var audio = document.createElement('audio');
		audio.setAttribute('class','song-audio');
		audio.setAttribute('controls','true');
		div.appendChild(audio);

		var source = document.createElement('source');
		source.setAttribute('src',library[artist][song]['location']);
		source.setAttribute('type','audio/mpeg');
		audio.appendChild(source);
	}
});