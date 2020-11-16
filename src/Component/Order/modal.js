import React, {useState} from 'react';
import {Modal, Button } from 'react-bootstrap/';
import classes from './MenuItems/categoryItems.module.css';

const Modalo = (props) => {

        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        // const product = props.Ilist.map(itm => {

        //     return( 
        //      <ul key={itm.id}>{itm.text}</ul>
        //     );
            
        // });
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}
            className={classes.modal}>
              You have 3 prduct in your bag
            </Button>
      
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
              Product to buy!
              </Modal.Header>
              <Modal.Body>
                Products
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
export default Modalo;