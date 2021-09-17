import React from 'react';
import '../Footer/footer.css';

function  Footer(){
    return(
        <>
        <div className='Footer'>
         
            < div className='column1'>
                    <i className="fab fa-facebook "></i>
                    <i className="fab fa-instagram-square "></i>
                    <i className="fab fa-twitter-square "></i>
                    <i class="fab fa-linkedin"></i>
                     <i class="fab fa-github-square"></i>
                
            </div>

        </div>
         <div className='hr'>
 &copy;{new Date().getFullYear()}|Beamfox|All rights preserved|Terms of Service|Privacy
            </div>
    </>
    )
}
export default Footer;