

let header = document.querySelector("header");



function changeHeader() {
    if (window.scrollY > 400)
        header.classList.add("change")
    else
        header.classList.remove("change")
}

let previousScrollPosition = window.scrollY

function showHideNav() {
    // debugger
    const currentScrollPosition = window.scrollY

    // console.log(currentScrollPosition + 'curr');
    // console.log(previousScrollPosition + 'pre');

    if (currentScrollPosition > previousScrollPosition) {

        header.classList.add("hide");

    } else {
        header.classList.remove("hide");
    }

    previousScrollPosition = currentScrollPosition;
}



window.addEventListener("scroll", showHideNav);
window.addEventListener("scroll", changeHeader)
