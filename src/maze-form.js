import React, { Component } from 'react';


class MazeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        height: 10,
        width: 10,
      },
    }
  }

  handleInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  }

  handleButtonClick = () => {
    const {width, height} = this.state.fields;
    this.props.getMaze(width, height);
  }

  render() {
    const { width, height } = this.state.fields;
    return (
      <div className="form_container">
        <div>
        <div className="field is-horizontal"> 
          <div className="field">
            <label className="label">Ancho</label>
            <div className="control">
              <input name="width" className="input" type="text" value={width} placeholder="Text input" onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="field">
            <label className="label">Alto</label>
            <div className="control">
              <input name="height" className="input" type="text" value={height} placeholder="Text input" onChange={this.handleInputChange} />
            </div>
          </div>
        </div>
         <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-primary" onClick={this.handleButtonClick}>
                Generar Laberinto
              </button>
            </div>
          </div>
        </div> 
        </div>
      </div>
    );
  }

}

export default MazeForm;