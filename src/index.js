import scrollToMain from "./scrollHelpers/scrollToMain.js";
import scrollToProjects from "./scrollHelpers/scrollToProjects.js";
import './styles/main.css';

window.onload = () => {
    window.scrollTo({ left: 0, top: 0 });
};

let leftBgPatternPage1 = document.getElementsByClassName('bg-pattern')[0];
let rightBgPatternPage1 = leftBgPatternPage1.cloneNode(true);
rightBgPatternPage1.setAttribute('class', 'bg-pattern inverted');
leftBgPatternPage1.appendChild(rightBgPatternPage1);

let projectsButton = false;
document.getElementById('projects-button').addEventListener("click", (e) => {
    e.preventDefault();
    projectsButton = !projectsButton;
    if (projectsButton) {
        scrollToProjects();
    } else {
        scrollToMain();
    }
});

window.addEventListener('wheel', (e) => {
    if (e.wheelDelta < 0) {
        scrollToProjects();
    } else {
        scrollToMain();
    }
});



// window.addEventListener('scroll', (e) => {
//     throttle(
//         setTimeout(() => {
//             console.log(window.scrollX, window.innerWidth);
//             console.log(window.scrollX % window.innerWidth);
//             if (window.scrollX % window.innerWidth !== 0) {
//                 window.scrollBy({ left: window.scrollX - window.innerWidth, behavior: "smooth" });
//             }
//         }, 1000
//         ), 1000);
// });
