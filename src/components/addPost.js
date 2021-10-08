import React, { useState, useContext } from "react";
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function addPost(props){
    return (
    <Modal
    {...props}
    size="lg"
    animation={false}
    centered
  >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add A New Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
   </Modal>);
}
export default addPost;