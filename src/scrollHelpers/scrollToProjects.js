export default function scrollToProjects() {
    window.scrollTo({ top: 0, left: window.innerWidth, behavior: "smooth" });
    document.getElementsByClassName("button-div")[0].style.transform = "translateX(20vw) scale(1.5)";

    document.querySelectorAll("#projects-background svg").forEach((svg) => {
        svg.classList.add("bgline");
    });
    document.getElementById('projects-background').classList.add("projects-animation-start");
}
