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
function projectsNav() {
    document.getElementById("about").style.display="none";
    document.getElementById("project").style.display="flex";
    document.getElementById("projects").classList.remove("nav-item");
    document.getElementById("projects").classList.add("active");
    document.getElementById("aboutme").classList.remove("active");
    document.getElementById("aboutme").classList.add("nav-item");
    document.getElementById("contactme").classList.remove("active");
    document.getElementById("contactme").classList.add("nav-item");
}
function aboutNav(){
    document.getElementById("about").style.display="flex";
    document.getElementById("project").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("projects").classList.remove("active");
    document.getElementById("projects").classList.add("nav-item");
    document.getElementById("aboutme").classList.remove("nav-item");
    document.getElementById("aboutme").classList.add("active");
    document.getElementById("contactme").classList.remove("active");
    document.getElementById("contactme").classList.add("nav-item");
}
