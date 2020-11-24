import React, {useState} from 'react';
import {Modal, Button } from 'react-bootstrap/';
import classes from './MenuItems/categoryItems.module.css';
import './modal.module.css';

const Modalo = (props) => {

        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const product = props.Ilist.map((itm, index) => {

            return( 
             <ul key={index}>
               <div>
                 <h3>{itm.text}</h3>
                 <h3>X {itm.count}</h3>
                 <h4>{itm.price} €</h4>
               </div>
               </ul>
            );
            
        });

        const itNu = product.length;
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}
            className={itNu ? classes.modal : classes.nModal}>
              You have {itNu} prduct in your bag
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
                {product}
                <h4>Total: </h4> {props.totalPrice(product.price)}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Continue</Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
export default Modalo;