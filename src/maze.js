import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

import API from './api'
import MazeBlock from './maze-block';
import MazeForm from './maze-form'
import './style.css'

class Maze extends Component {

  constructor(props) {
    super(props);

    API.fetchMaze(10, 10)
      .then(response => this.parseMaze(response));

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      dir: 'up',
    }
  }

  getMaze = (w, h) => {
    API.fetchMaze(w, h)
      .then(response => this.parseMaze(response));
  }

  parseMaze = (maze) => {
    let parsedMaze = [];

    for (var i in maze) {
      let j = 0;
      let row = [];
      while (j < maze[i].length) {
        switch (maze[i][j]) {
          case '|':
          case '+':
            row.push('1');
            j++;
            break;
          case '-':
            row.push('1');
            j += 2;
            break;
          case 'p':
            row.push('p');
            this.setState({ player: { x: j, y: i*1}});
            j++;
            break
          case ' ':
            if (maze[i][j + 1] == 'g') {
              row.push('g');
            } else {
              row.push('0');
              if (maze[i - 1][j] != '+' || maze[i - 1][j] != '+') 
                j++;
            }
            j++;
            break;
          default:
            j++;
            break;
        }
      }
      parsedMaze.push(row);
    }
    document.documentElement.style.setProperty("--defaultRowNum", parsedMaze.length);
    document.documentElement.style.setProperty("--defaultColNum", parsedMaze[i].length);
    this.setState({ maze: parsedMaze })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keydown, false);
  }

  keydown = (e) => {
    switch (e.key) {
      case 'w':
      case 'ArrowUp':
        this.moveTo(this.state.player.y - 1, this.state.player.x);
        this.setState({ dir: 'up' });
        break;
      case 'd':
      case 'ArrowRight':
        this.moveTo(this.state.player.y, this.state.player.x + 1);
        this.setState({ dir: 'right' });
        break;
      case 's':
      case 'ArrowDown':
        this.moveTo(this.state.player.y + 1, this.state.player.x);
        this.setState({ dir: 'down' });
        break;
      case 'a':
      case 'ArrowLeft':
        this.moveTo(this.state.player.y, this.state.player.x - 1);
        this.setState({ dir: 'left' });
        break;
    }
  }

  moveTo = (y, x) => {
    const { maze, player } = this.state;
    if (maze[y][x] == '0') {
      maze[player.y][player.x] = '0';
      maze[y][x] = 'p';

      this.setState({ maze: maze, player: { y: y, x: x } });
    } else if (maze[y][x] === 'g') {
      maze[player.y][player.x] = '0';
      maze[y][x] = 'p';

      this.setState({ maze: maze, player: { y: y, x: x } }, () => alert('HAS GANADO'));
    }
  }

  render() {
    const mazeBlocks = [];
    const { maze, dir } = this.state;
    for (var i in maze) {
      for (var j in maze[i]) {
        switch (maze[i][j]) {
          case '1':
            mazeBlocks.push(<MazeBlock key={maze.length*i + j} type="wall"  />);
            break;
          case '0':
            mazeBlocks.push(<MazeBlock key={maze.length*i + j} type="road"  />);
            break;
          case 'p':
            mazeBlocks.push(<MazeBlock key={maze.length*i + j} type="road" player dir={dir} />);
            break;
          case 'g':
            mazeBlocks.push(<MazeBlock key={maze.length*i + j} type="road" goal />);
            break;
        }
      }
    }
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <h1 className="maze_title">Pusitas Maze</h1>
        </div>
        <MazeForm getMaze={this.getMaze} />
        <div className="hero-body" ref={this.mazeContainer}>
          <div className="grid_container" >
          {
            mazeBlocks
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Maze;