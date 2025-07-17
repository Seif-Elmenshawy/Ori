document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const welcomeElement = document.getElementById("welcome");
            welcomeElement.classList.add("after-time");
        getElementById("hero").style.display="block";
    }, 1500);
});
function skillsNav(){
    document.getElementById("skills-section").style.display="flex";
    document.getElementById("hobbies-section").style.display="none";
    document.getElementById("skills").classList.add("active");
    document.getElementById("hobbies").classList.add("nav-item");
}