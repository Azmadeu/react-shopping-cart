import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap'

class Window extends Component {

  deleteElem = () => {
    const {
      Basket,
      cartId,
      decrement,
      handleClose,
      Counter,
      removeCart
    } = this.props;

    const removedElem = Basket.find(item =>
      +item.id === +cartId
    );
    Counter >= 0 && decrement(removedElem.quantity);
    removeCart(cartId);
    handleClose();
  };

  render() {
    const {show, handleClose} = this.props;
    return (
      <div>
        <Modal
          show={show}
          onHide={handleClose}
        >
          <Modal.Header>
            <span
              className="cancel-x"
              onClick={this.closeModal}
            >
              x
            </span>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-warning">
              <h4>WARNING</h4>
              <p>Are you sure you want to delete this item from basket?</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="danger">
              <Button
                className="delete-button"
                onClick={this.deleteElem}
              >
                Delete
              </Button>
              <Button
                className="cancel-button"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Window
