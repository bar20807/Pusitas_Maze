
const API = {
  fetchMaze: function(w, h) {
    return fetch(`https://maze.juanelcaballo.club/?type=json&w=4&h=4`)
      .then(response => response.json());
  }
}


export default API;