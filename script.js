document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const welcomeElement = document.getElementById("welcome");
            welcomeElement.classList.add("after-time");
    }, 1500);
});