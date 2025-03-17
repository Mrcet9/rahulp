document.getElementById("payment-method").addEventListener("change", function() {
    let cardSection = document.getElementById("card-details");
    let upiSection = document.getElementById("upi-details");

    if (this.value === "card") {
        cardSection.style.display = "block";
        upiSection.style.display = "none";
    } else {
        cardSection.style.display = "none";
        upiSection.style.display = "block";
    }
});

document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let paymentMethod = document.getElementById("payment-method").value;
    let message = document.getElementById("status-message");

    if (paymentMethod === "card") {
        let cardNumber = document.getElementById("card-number").value;
        let expiry = document.getElementById("expiry").value;
        let cvv = document.getElementById("cvv").value;

        if (cardNumber.length !== 16 || !expiry.includes("/") || cvv.length !== 3) {
            message.innerHTML = "⚠️ Invalid Card Details!";
            message.style.color = "red";
            return;
        }
    } else {
        let upiID = document.getElementById("upi-id").value;
        if (!upiID.includes("@")) {
            message.innerHTML = "⚠️ Invalid UPI ID!";
            message.style.color = "red";
            return;
        }
    }

    message.innerHTML = "✅ Payment Successful!";
    message.style.color = "green";
});
