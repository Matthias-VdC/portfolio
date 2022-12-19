export default function scrollToProjects(isChromium) {
    if (isChromium) {
        document.getElementById('page-2').scrollIntoView();
    } else {
        document.getElementById('page-2').scrollIntoView({ behavior: 'smooth' });
    }

    document.getElementsByClassName("button-div")[0].style.transform = "translateX(20vw) scale(1.5)";

    document.querySelectorAll("#projects-background svg").forEach((svg) => {
        svg.classList.add("bgline");
        svg.classList.remove("no-bgline");
    });
    document.getElementById('hidden-text').innerText = 'Home';
    document.getElementById('projects-background').classList.add("projects-animation-start");
}
