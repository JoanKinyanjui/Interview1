import React,{useRef,useState} from 'react';
import {Overlay} from 'react-bootstrap';
import SetReminder from './SetReminder';

function Reminder() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        <div variant="danger" ref={target} onClick={() => setShow(!show)}>
        <i class="fas fa-bell"></i>  Reminder
        </div>
        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgb(159, 157, 157)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              <SetReminder />
            </div>
          )}
        </Overlay>
      </>
    );
  }
  
  export default Reminder;