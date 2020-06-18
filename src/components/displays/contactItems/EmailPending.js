import React from 'react';
import giffers from './emailsending.gif';

const EmailPending = () => {
  return (
    <h1 className='orange-Text'>
      Sending...
      <div>
        <img
          src={giffers}
          alt="email flying through time and space.  I will see you on the other side maybe, baby.  Maybe not, that's the beauty of the universe"
          height='100px'
        />
      </div>
    </h1>
  );
};

export default EmailPending;
