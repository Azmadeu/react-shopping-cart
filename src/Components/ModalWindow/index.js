import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap'

class Window extends Component {

  deleteElem = () => {
    const removedElem = this.props.Basket.find(item =>
      +item.id === +this.props.cartId
    );
    this.props.Counter >= 0 && this.props.decrement(removedElem.quantity);
    this.props.removeCart(this.props.cartId);
    this.props.handleClose();
  };

  closeModal = () => {
    this.props.handleClose();
  };

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header>
            <span className="cancel-x" onClick={this.closeModal}>x</span>
          </Modal.Header>
          <Modal.Body>
            <h4 style={{display: "flex", justifyContent: "center"}}>WARNING</h4>
            <p style={{display: "flex", justifyContent: "center"}}>
              Are you sure you want to delete this item from basket?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div className="danger">
              <Button className="delete-button" onClick={this.deleteElem}>Delete</Button>
              <Button className="cancel-button" onClick={this.closeModal}>Cancel</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Window
