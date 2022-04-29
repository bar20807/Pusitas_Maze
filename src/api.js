const API = {
  fetchMaze: function (w, h) {
    return fetch(`https://maze.juanelcaballo.club/?type=json&w=${w.toString()}&h=${h.toString()}`)
      .then(response => response.json());
  }

}
export default API;