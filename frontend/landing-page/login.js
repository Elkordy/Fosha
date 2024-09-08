document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        throw new Error('Failed to login');
      }
  
      const data = await response.json();
      document.getElementById('login-response').innerHTML = `Welcome, <img src="images/user-icon.png" alt="User Icon" style="width:20px;height:20px;"> ${username}`;
    } catch (error) {
      document.getElementById('login-response').textContent = error.message;
    }
  });
  