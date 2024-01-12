function shuffle(arr) {
    let curidx = arr.length;

    while (curidx > 0) {
        ridx = Math.floor(Math.random() * curidx);
        curidx--;

        [arr[curidx], arr[ridx]] = [
            arr[ridx], arr[curidx]];
    }

    return arr;
}

let techElm = document.querySelector("#techs");

function update_tech() {
    let techs = ["Python", "OCaml", "C", "C++", "Java", "Coq", "Rust", "HTML", "CSS", "JavaScript", "SQL", "Mathematica", "Unity", "ROS"];
    shuffle(techs);

    let curidx = 0;

    let update = () => {
        if (curidx == techs.length) {
            curidx = 0;
            shuffle(techs);
        }
        techElm.textContent = techs[curidx];
        curidx++;
    }
    return update;
}

let update = update_tech();
update();
techElm.addEventListener("animationiteration", update);

// Scroll the background image slower than scroll rate
document.querySelector("body").onscroll = () => {  
    var target = document.querySelector("body");
    var yvalue = document.scrollingElement.scrollTop * 0.1;
    target.style.backgroundPositionY = -yvalue + "px";
  }