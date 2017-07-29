// Write a function to get json blob
// Ajax request with fetch
//  http://rallycoding.herokuapp.com/api/music_albums

// Refactor with arrow function
const fetchAlbums = async () => {
  const res = await fetch("http://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();

  console.log(json);
};

// // Refactor using ES2017
// // Use async keyword
// async function fetchAlbums() {
//   // Add await before promises
//   // Assign to variables
//   const res = await fetch("http://rallycoding.herokuapp.com/api/music_albums");
//   const json = await res.json();
//
//   console.log(json);
// }

// function fetchAlbums() {
//   fetch("http://rallycoding.herokuapp.com/api/music_albums")
//     .then(res => res.json())
//     .then((json = console.log(json)));
// }

fetchAlbums();
