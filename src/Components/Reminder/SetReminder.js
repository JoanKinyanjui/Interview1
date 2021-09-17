import React, { useEffect, useState } from 'react';
import './reminder.css';

function SetReminder(){
    
return(
    <div className='container' >
<h3> Reminders</h3>
    <form  className='form'>
      <div className="row pt-5 mx-auto">
      <label html='id'>Id</label>
      <div className="col-8 form-group pt-2 mx-auto">
      <input type="text" name="name"  />
      </div>
      <label htmlFor='Reminder'>Reminder</label>
      <div className="col-8 form-group pt-2 mx-auto ">
      <input type="email"  name="email"  />
      </div>
      <label htnlFor='time'>Time</label>
      <div className="col-8 form-group pt-2 mx-auto ">
      <input type="email"  name="subject"  />
      </div>
      
      <div className="col-8 form-group pt-2 mx-auto">
      <input type="submit" value="Add" />
      </div>
      </div>
    </form>
    </div>
)
}
export default SetReminder;