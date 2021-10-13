import React, { useState, useContext } from "react";
import {Modal,FloatingLabel,Form,Row,Col,ToggleButton,ButtonGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Axios from "axios";
import {useHistory} from "react-router-dom";
function AddPost(props){
  const [artType,setartType]=useState('artwork');
  const [photoURL,setPhotoURL]=useState(null);
  const history=useHistory();
  const type=[
    {id:'1',value:'artwork'},
    {id:'2',value:'photography'}
  ]
  function uploadImage(e){
    setPhotoURL(URL.createObjectURL(e.target.files[0]));
  }
  function upload(){
   
    let post={
      title:document.getElementById('photoID').value,
      description:document.getElementById('description').value,
      artType:artType,
      photoURL:photoURL
    }
    console.log(post);
    Axios.post('/posts',post).then(function(response){
      console.log(response);
      
    });
    props.onHide();
    history.push("/");
  }
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
        <h4>Upload Your Art Here</h4>
        <FloatingLabel  controlId="floatingTextarea" label="Title" className="mb-3">
    <Form.Control id='photoID' as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Description">
    <Form.Control
      id='description'
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <fieldset>
    <Form.Group as={Row} className="mb-3">
        <Form.Check
          type="radio"
          label="Upload an Artwork"
          name="artwork"
          id="artwork"
        />
        <Form.Check
          type="radio"
          label="Upload a Photography"
          name="photography"
          id="photography"
        />
    </Form.Group>
    <ButtonGroup className="mb-2">
    {type.map((choice) => (
    <ToggleButton
            key={choice.id}
            id={`radio-${choice.id}`}
            type="radio"
            variant='outline-primary'
            name="artType"
  
            value={choice.value}
            checked={artType === choice.value}
            onChange={(e) => setartType(e.currentTarget.value)}
          >
            {choice.value}
          </ToggleButton>
          ))}
          </ButtonGroup>
    <Form.Group>
    <input type="file" id='uploadedWork' className="form-control" onChange={uploadImage} />
    </Form.Group>
  </fieldset>
      </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={upload} type='submit'>Upload</Button>
      </Modal.Footer>
   </Modal>);
}
export default AddPost;