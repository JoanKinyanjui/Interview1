import React from 'react';
import Reminder from '../Reminder/reminder';
import Meetings from '../Schedule meeting/meeting';
import Email from '../Send Email/Email';
import './Home.css';

function Home() {

  return (
      <>
  <div div className='Home' >
  <div className='bar'>
  <i class="fas fa-play-circle"></i> Actions
  </div>
  <div className='Actions'>
  <div>
      <ul className='unordered'>
          <li className='list-items'>
          <Email />
          </li>
          <li className='list-items'>
              <Meetings />
          </li>
          <li className='list-items'>
          <Reminder />
          </li>
      </ul>
      </div>
  </div>
</div>
</>
  
  );
}

export default Home;