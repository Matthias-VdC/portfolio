export default function scrollToMain(isChromium) {
    if (isChromium) {
        document.getElementById('page-1').scrollIntoView();
    } else {
        document.getElementById('page-1').scrollIntoView({ behavior: 'smooth' });
    }

    document.getElementsByClassName("button-div")[0].style.transform = "";
    document.querySelectorAll("#projects-background svg").forEach((svg) => {
        svg.classList.remove("bgline");
        svg.classList.add("no-bgline");
    });
    document.getElementById('projects-background').classList.remove("projects-animation-start");
}
