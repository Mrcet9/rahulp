document.addEventListener("DOMContentLoaded", () => {
    // Handle Apply for Pass Form Submission
    document.querySelector("#passForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let fullName = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;
        let dob = document.getElementById("dob").value;
        let boardingPoint = document.getElementById("boardingPoint").value;
        let passType = document.getElementById("passType").value;

        if (!fullName || !email || !address || !dob || !boardingPoint || !passType) {
            alert("⚠️ Please fill in all required fields.");
            return;
        }

        let applicationData = {
            fullName,
            email,
            address,
            dob,
            boardingPoint,
            passType,
            applicationDate: new Date().toLocaleDateString()
        };

        // Save application data in local storage
        localStorage.setItem("busPassApplication", JSON.stringify(applicationData));

        alert("✅ Bus Pass Application Submitted Successfully!");

        // Redirect to Thank You page after submission
        window.location.href = "thankyou.html";
    });
});
