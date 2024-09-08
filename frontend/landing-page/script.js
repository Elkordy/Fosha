document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    try {
      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      document.getElementById("response").innerText = result.message;
    } catch (error) {
      document.getElementById("response").innerText = 'Error: ' + error.message;
    }
  });
  
  document.getElementById("register-form").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
  
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const result = await response.json();
      document.getElementById("auth-response").innerText = result.message;
    } catch (error) {
      document.getElementById("auth-response").innerText = 'Error: ' + error.message;
    }
  });
  
  document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const result = await response.json();
      if (result.token) {
        localStorage.setItem('token', result.token);
        document.getElementById("auth-response").innerText = 'Login successful';
      } else {
        document.getElementById("auth-response").innerText = result.message;
      }
    } catch (error) {
      document.getElementById("auth-response").innerText = 'Error: ' + error.message;
    }
  });  