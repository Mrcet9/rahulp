document.addEventListener("DOMContentLoaded", () => {
    // Handle Tracking Form Submission
    document.querySelector("#trackForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let trackEmail = document.getElementById("trackEmail").value;
        let applicationData = JSON.parse(localStorage.getItem("busPassApplication"));

        if (applicationData && applicationData.email === trackEmail) {
            document.getElementById("statusResult").innerHTML = `
                ✅ Application Found! <br>
                🔹 Name: ${applicationData.fullName} <br>
                🔹 Pass Type: ${applicationData.passType} <br>
                🔹 Status: <span style="color: green;">Approved</span> 🎉
            `;
        } else {
            document.getElementById("statusResult").innerHTML = `
                ❌ No application found. Please check your email or apply first.
            `;
        }
    });
});
