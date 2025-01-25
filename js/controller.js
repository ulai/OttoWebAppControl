let KEY;

function selectRobot(el) {
    el.classList.toggle("green--mask");
}

window.addEventListener('keydown', function (e) {
    KEY++;
    if(KEY == 1) {
        if (e.key == "ArrowUp") {
            btnPressed("up");
        }
        else if (e.key == "ArrowDown") {
            btnPressed("down");
        }
        else if (e.key == "ArrowRight") {
            btnPressed("right");
        }
        else if (e.key == "ArrowLeft") {
            btnPressed("left");
        }
        else if (e.key == "s") {
            btnPressed("s");
        }
    } 
}, false);

window.addEventListener('keyup', function (e) {
    KEY = 0;
}, false);

function btnPressed(btn) {    
    if (OttoConnected) { 
        const i = ['stop','up','down','right','left'].indexOf(btn);
        if(i == -1) return;
        changeBackgroundColor(btn);
        Move(i);
    }
}

function changeBackgroundColor(btn) {
    ['up','down','right','left'].forEach(s => document.getElementsByClassName(s)[0].style.backgroundColor = (btn == s ? "#FF5700" : "#32D900"));
}