import React from 'react';
import { useState } from 'react';

function ClickButtonPost() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert('You like me!');
  }

  return (    
    <button onClick={handleClick}>
      On_On -- It's me!
      Give likes {count} times
    </button>
  );
}

function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const formData = { name, email };

  console.log('FormData:', formData);

  fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => console.log('Server response:', data))
  .catch(error => console.error('Error:', error));
}

function UserPost({ username, image, caption, id }) {

  return (
    <div className="post">
      <div className="post-image-container">
        <img
        src={image} 
        alt={caption} 
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />
      </div>
      <div className="post-content">
        <p className="post-username">
          <strong>{username}</strong>:
        </p>
        <p className="post-caption">{caption}</p>
        <div className="Profile">
          <ClickButtonPost />
          <ClickButtonPost />
        </div>
      </div>
      <p>
        <strong>{username}</strong>: {caption}{id}
      </p>
    </div>
  );
}

export default UserPost;
