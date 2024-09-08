document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        throw new Error('Failed to register');
      }
  
      const data = await response.json();
      document.getElementById('register-response').textContent = data.message;
      
      // Wait for 2 seconds before redirecting
      setTimeout(() => {
        window.location.href = 'index.html'; // Redirect to home page
      }, 2000);
    } catch (error) {
      document.getElementById('register-response').textContent = error.message;
    }
  });
