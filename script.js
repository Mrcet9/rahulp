document.addEventListener("DOMContentLoaded", function () {
    // Dynamic banner text animation
    const bannerText = document.querySelector(".banner h2");
    const messages = [
        "🚍 Get Your Bus Pass Easily!",
        "🎟 Apply for Your Pass Online!",
        "📍 Track Your Bus Pass Status!",
        "🚌 Travel Hassle-Free with Digital Pass!"
    ];
    let index = 0;

    function changeText() {
        bannerText.textContent = messages[index];
        index = (index + 1) % messages.length;
    }

    setInterval(changeText, 3000); // Change text every 3 seconds

    // Background image change effect
    const banner = document.querySelector(".banner");
    const images = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
    let imgIndex = 0;

    function changeBackground() {
        banner.style.backgroundImage = `url('${images[imgIndex]}')`;
        imgIndex = (imgIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000); // Change background every 5 seconds
});
