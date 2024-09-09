document.getElementById("contact-form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  console.log('Submitting contact form:', { name, email });

  try {
    const response = await fetch('http://34.46.138.55:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network response was not ok');
    }

    const result = await response.json();
    document.getElementById("response").innerText = result.message;
  } catch (error) {
    console.error('Contact form error:', error);
    document.getElementById("response").innerText = 'Error: ' + error.message;
  }
});

document.getElementById("register-form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  console.log('Registering user:', { username });

  try {
    const response = await fetch('http://34.46.138.55:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to register');
    }

    const result = await response.json();
    document.getElementById("auth-response").innerText = result.message;
  } catch (error) {
    console.error('Registration error:', error);
    document.getElementById("auth-response").innerText = 'Error: ' + error.message;
  }
});

document.getElementById("login-form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  console.log('Logging in user:', { username });

  try {
    const response = await fetch('http://34.46.138.55:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    console.log('Response status:', response.status);

    const result = await response.json();
    if (response.ok && result.token) {
      localStorage.setItem('token', result.token);
      document.getElementById("auth-response").innerText = 'Login successful';
    } else {
      document.getElementById("auth-response").innerText = result.message;
    }
  } catch (error) {
    console.error('Login error:', error);
    document.getElementById("auth-response").innerText = 'Error: ' + error.message;
  }
});
