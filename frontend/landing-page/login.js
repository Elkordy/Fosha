document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  console.log('Attempting to login with:', { username, password });

  try {
    const response = await fetch('http://34.46.138.55:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to login');
    }

    const data = await response.json();
    console.log('Login successful:', data);
    document.getElementById('login-response').innerHTML = `Welcome, <img src="images/user-icon.png" alt="User Icon" style="width:20px;height:20px;"> ${username}`;
  } catch (error) {
    console.error('Login error:', error);
    document.getElementById('login-response').textContent = error.message;
  }
});
