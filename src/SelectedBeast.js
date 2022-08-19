import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SelectedBeast.css';



class SelectedBeast extends React.Component {
  render() {
    return (
     
       <Modal 
       show={this.props.show}
        onHide={this.props.onHide}
      // {...props}
      // size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      // centered
    >
      <Modal.Header closeButton onClick={this.props.onHide}>
        <Modal.Title>
         {this.props.beast.title}
        </Modal.Title>
      </Modal.Header>
      {/* <Modal.Body> */}
      <img src={this.props.beast.image_url} alt={this.props.beast.description}/>
         <p>
          {this.props.beast.description}  
        </p>
      {/* </Modal.Body> */}
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
         
        
   
    );
  }

}
   
    
export default SelectedBeast;