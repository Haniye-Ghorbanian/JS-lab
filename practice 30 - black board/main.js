let blackBg = document.querySelector(".slide");

let flag = true;



function handleKey(e) {
    

    if (e && e.code === "KeyB") {
        if (flag) {
            blackBg.classList.add('black');
            flag = false;
        } else {
            blackBg.classList.remove('black');
            flag = true;
        }
    }


}

window.addEventListener("keydown", handleKey);