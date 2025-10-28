document.getElementById("div1").style.color = "#444444";
document.getElementById("div1").style.margin = "40px";
document.getElementById("div1").style.overflow = "auto";
document.getElementById("div1").style.flex = "auto";

function gridMaker(n) {
    const container = document.querySelector("div1");
    let divRows = undefined;

    for (i = 0; n > i; i++) {
        divRows = document.createElement("div")
        container.appendChild(divRows);
    }
}