import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap'

class Window extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Body>
            <hr/>
            <h4 style={{display: "flex", justifyContent: "center"}}>WARNING</h4>
            <p style={{display: "flex", justifyContent: "center"}}>
              Are you sure you want to delete this item?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div className="danger">
              <Button onClick={this.props.handleClose}>Delete</Button>
              <Button onClick={this.props.handleClose}>Cancel</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Window
