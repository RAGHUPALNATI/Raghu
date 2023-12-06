// login.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simulated login validation (Replace with actual validation logic)
    if (username === "user" && password === "password") {
      // Redirect to dashboard or perform other actions upon successful login
      alert("Login Successful!");
    } else {
      document.getElementById("error-message").textContent = "Invalid username or password";
    }
  });
  