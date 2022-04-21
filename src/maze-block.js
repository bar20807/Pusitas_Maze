import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class MazeBlock extends Component {
    
  constructor(props) {
    super(props);

  }

  render() {
    let icon = '';
    if (this.props.player) {
      switch (this.props.dir) {
        case 'up':
          icon = (<FontAwesomeIcon icon="arrow-circle-up" />);
          break;
        case 'right':
          icon = (<FontAwesomeIcon icon="arrow-circle-right" />);
          break;
        case 'down':
          icon = (<FontAwesomeIcon icon="arrow-circle-down" />);
          break;
        case 'left':
          icon = (<FontAwesomeIcon icon="arrow-circle-left" />);
          break;
        default:
          icon = (<FontAwesomeIcon icon="arrow-circle-up" />);
          break;
      }
    }
    return(
      <button className={`button ${this.props.type == 'wall'? 'is-dark' : 'is-light' } ${this.props.player? 'player' : ''} ${this.props.goal? 'goal' : ''}`} >
        <span className="icon is-small">
          {icon}
        </span>
      </button>
    );
  }
}

export default MazeBlock;