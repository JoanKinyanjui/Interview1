import React,{useRef,useState} from 'react';
import './Email.css';
import {Overlay} from 'react-bootstrap';
import { ContactUs } from './input';

function Email() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        <div variant="danger" ref={target} onClick={() => setShow(!show)}>
        <i class="fas fa-envelope"></i> Send Email
        </div>
        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                  margin:'auto',
                  width:'40rem',
                  height:'25rem',
                backgroundColor: 'rgb(159, 157, 157)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              <ContactUs />
            </div>
          )}
        </Overlay>
      </>
    );
  }
  
  export default Email;