import scrollToAbout from "./scrollHelpers/scrollToAbout.js";
import scrollToMain from "./scrollHelpers/scrollToMain.js";
import scrollToProjects from "./scrollHelpers/scrollToProjects.js";
import './styles/main.css';

window.onload = () => {
    window.scrollTo({ left: 0, top: 0 });

    // https://developer.chrome.com/blog/history-api-scroll-restoration/
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
    let isChromium = !!window.chrome;
    if (isChromium) {
        console.log('Recommended browser is Firefox!');
    }

    let leftBgPatternPage1 = document.getElementsByClassName('bg-pattern')[0];
    let rightBgPatternPage1 = leftBgPatternPage1.cloneNode(true);
    rightBgPatternPage1.setAttribute('class', 'bg-pattern inverted');
    leftBgPatternPage1.appendChild(rightBgPatternPage1);

    let leftBgPatternPage2 = document.getElementById('projects-background');
    let rightBgPatternPage2 = leftBgPatternPage2.childNodes[1].cloneNode(true);
    rightBgPatternPage2.setAttribute('class', 'inverted');
    rightBgPatternPage2.setAttribute('id', '');
    leftBgPatternPage2.appendChild(rightBgPatternPage2);
    let projectsButton = false;
    let pagination = [1, 0, 0];


    document.getElementById('projects-button').addEventListener("click", (e) => {
        e.preventDefault();
        projectsButton = !projectsButton;
        if (projectsButton) {
            scrollToProjects(isChromium);
            pagination = [0, 1, 0];
        } else {
            scrollToMain(isChromium);
            pagination = [1, 0, 0];
        }
    });

    window.addEventListener('wheel', (e) => {
        if (e.wheelDelta < 0) {
            if (!pagination[2]) {
                if (!pagination[1]) {
                    scrollToProjects(isChromium);
                    pagination = [0, 1, 0];
                } else if (pagination[1] && document.getElementById('page-2').scrollHeight - document.getElementById('page-2').scrollTop === window.innerHeight) {
                    scrollToAbout(isChromium);
                    pagination = [0, 0, 1];
                }
            }
        } else {
            if (!pagination[0]) {
                if (document.getElementById('page-2').scrollTop === 0 && pagination[1]) {
                    scrollToMain(isChromium);
                    pagination = [1, 0, 0];
                } else if (!pagination[1]) {
                    scrollToProjects(isChromium);
                    pagination = [0, 1, 0];
                }
            }
        }
    });
};
