export default function scrollToAbout(isChromium) {
    if (isChromium) {
        document.getElementById('page-3').scrollIntoView();
    } else {
        document.getElementById('page-3').scrollIntoView({ behavior: 'smooth' });
    }

    document.getElementsByClassName("button-div")[0].style.transform = "translateX(120vw) scale(1.5)";
    document.querySelectorAll("#projects-background svg").forEach((svg) => {
        svg.classList.remove("bgline");
        svg.classList.add("no-bgline");
    });
    document.getElementById('hidden-text').innerText = 'Projects';
    document.getElementById('projects-background').classList.remove("projects-animation-start");
}
