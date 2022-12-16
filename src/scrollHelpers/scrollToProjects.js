export default function scrollToProjects() {
    window.scrollTo({ top: 0, left: window.innerWidth, behavior: "smooth" });
    document.getElementsByClassName("button-div")[0].style.transform = "translateX(20vw) scale(1.5)";

    let leftBgPatternPage2 = document.getElementsByClassName("bg-pattern")[1];
    let rightBgPatternPage2 = leftBgPatternPage2.cloneNode(true);
    rightBgPatternPage2.setAttribute('class', 'inverted');
    leftBgPatternPage2.appendChild(rightBgPatternPage2);

    document.querySelectorAll("#projects-background svg").forEach((svg) => {
        svg.classList.add("bgline");
    });
    document.getElementById('projects-background').classList.add("projects-animation-start");
}
