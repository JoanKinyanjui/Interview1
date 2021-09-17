import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../Send Email/Email.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_yunr6wd', form.current, 'user_M3OkvHhWZRUxYzUqSmhlQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (<div className='container'>


    <form ref={form} onSubmit={sendEmail}>
      <div className="row pt-5 mx-auto">
      <div className="col-8 form-group pt-2 mx-auto">
      <input type="text" name="name" placeholder='Name' />
      </div>
      <div className="col-8 form-group pt-2 mx-auto ">
      <input type="email"  name="email"  placeholder='Email'/>
      </div>
      <div className="col-8 form-group pt-2 mx-auto">
      <textarea name="message"   cols='50' rows='6' placeholder='Message' />
      </div>
     
      <div className="col-8 form-group pt-2 mx-auto">
      <input type="submit" value="Send" />
      </div>
      </div>
    </form>
    </div>
  )};

