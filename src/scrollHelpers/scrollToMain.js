export default function scrollToMain() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.getElementsByClassName("button-div")[0].style.transform = "";
    document.querySelectorAll("#projects-background svg").forEach((svg) => {
        svg.classList.remove("bgline");
    });
    document.getElementById('projects-background').classList.remove("projects-animation-start");
}
