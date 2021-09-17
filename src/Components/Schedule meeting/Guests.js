import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../Send Email/Email.css';
    
    export const Guests = () => {
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_b3bw0fa', form.current, 'user_M3OkvHhWZRUxYzUqSmhlQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

return( <div className='field'>

<form ref={form} onSubmit={sendEmail}>
  <div className="row pt-5 mx-auto">
  <label><i class="fas fa-map-marker-alt"></i>Location</label>
      <div className="col-8 form-group pt-2 mx-auto">
      <textarea name="location"   cols='30' rows='2'  />
      </div>
  <div className="col-8 form-group pt-2 mx-auto ">
  <input type="email"  name="email"  placeholder='@gmail.com'/>
  

  <input type="submit" value="Invite" />
  </div>
  </div>
</form>
</div>
)
}
