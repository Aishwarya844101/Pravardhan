document.getElementById("learn-more-btn").addEventListener("click", function () {
    alert("Learn more about how we are improving rural healthcare access!");
});

const features = document.querySelectorAll(".feature-box");
features.forEach(feature => {
    feature.addEventListener("mouseover", function () {
        feature.style.backgroundColor = "#dcedc8";
    });
    feature.addEventListener("mouseout", function () {
        feature.style.backgroundColor = "#f9f9f9";
    });
});