import React from 'react';
import './mail.css';

const Mail =({}) => {
    return(
       <div>
        <h2 class="Main"> Sign up For Daily Insider  </h2>
        <input class="take" type=" email" name="email" id="Email" required="required" placeholder="Email ID"/>
        <button class="Button" type="submit">Subscribe</button>
        </div>
         );
         }
         
 export default Mail;
