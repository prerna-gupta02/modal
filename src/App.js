import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import mimg from './assets/party-popper-joypixels.gif';

function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }
  return (
    <div className="App">
      <Button outline onClick={toggle}>Order</Button>
        <Modal isOpen={modal} toggle={toggle} className="mmain">
          <ModalBody className='mbody'>
            <img src={mimg} />
            <h6>Your order is completed!</h6>
            <p>You will be receiving a confirmation email with order details.</p>
            <Button className='bttn' onClick={toggle}>Go back to homepage</Button>{' '}
          </ModalBody>
        </Modal>
    </div>
  );
}

export default App;
