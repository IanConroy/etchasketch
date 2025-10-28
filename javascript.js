document.getElementById("div1").style.color = "#444444";
document.getElementById("div1").style.margin = "40px";
document.getElementById("div1").style.overflow = "auto";
document.getElementById("div1").style.flex = "auto";

function makeGrid() {
    const container = document.getElementById("container");
    const makeDiv = document.createElement("div");
    document.getElementById("container");
    for (let i = 0; i < 100; i++) {
    makeDiv.fillStyle = "white";
    makeDiv.fillRect(5, 5, 5, 5)
}
}