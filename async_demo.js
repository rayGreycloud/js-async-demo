// Write a function to get json blob
// Ajax request with fetch
//  http://rallycoding.herokuapp.com/api/music_albums

function fetchAlbums() {
  fetch("http://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then((json = console.log(json)));
}

fetchAlbums();
