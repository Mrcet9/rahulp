document.addEventListener("DOMContentLoaded", () => {
    // Handle Register Form Submission
    document.querySelector("#signup-form").addEventListener("submit", function (e) {
        e.preventDefault();

        let fullName = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (!fullName || !email || !password) {
            alert("⚠️ Please fill in all required fields.");
            return;
        }

        // Save user details (Simulating user storage)
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("✅ Account Created Successfully! Redirecting to Login Page...");
        window.location.href = "login.html"; // Redirect to Login page
    });

    // Handle Login Form Submission
    document.querySelector("#login-form-submit").addEventListener("submit", function (e) {
        e.preventDefault();

        let enteredEmail = document.getElementById("login-email").value;
        let enteredPassword = document.getElementById("login-password").value;

        let savedEmail = localStorage.getItem("userEmail");
        let savedPassword = localStorage.getItem("userPassword");

        if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
            alert("✅ Login Successful! Redirecting to Home Page...");
            window.location.href = "index.html"; // Redirect to Home page
        } else {
            alert("❌ Invalid email or password. Please try again.");
        }
    });

    // Toggle Between Forms
    document.querySelector("#go-to-login").addEventListener("click", function () {
        document.getElementById("register-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
    });

    document.querySelector("#go-to-register").addEventListener("click", function () {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register-form").style.display = "block";
    });
});
