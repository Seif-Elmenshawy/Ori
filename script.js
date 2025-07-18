document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const welcomeElement = document.getElementById("welcome");
            welcomeElement.classList.add("after-time");
        document.getElementById("hero").style.display="block";
    }, 1500);
});
function hobbyNav(){
    document.getElementById("hobbies-section").style.display="flex";
    document.getElementById("skills-section").style.display="none";
    document.getElementById("skills").classList.remove("active");
    document.getElementById("skills").classList.add("nav-item");
    document.getElementById("hobbies").classList.remove("nav-item");
    document.getElementById("hobbies").classList.add("active");
}
function skillsNav(){
    document.getElementById("skills-section").style.display="flex";
    document.getElementById("hobbies-section").style.display="none";
    document.getElementById("hobbies").classList.remove("active");
    document.getElementById("hobbies").classList.add("nav-item");
    document.getElementById("skills").classList.remove("nav-item");
    document.getElementById("skills").classList.add("active");
}