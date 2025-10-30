const canvas = document.getElementById("canTest");
const ctx = canTest.getContext("2d");
/**const grid = ctx.makeGrid("repeat"); **/
    // ctx.onLoad = makeGrid("repeat"); {
    ctx.fillStyle = "#939394ff";
        ctx.fillRect(30, 30, 20, 20);
        createPattern(ctx, 256)
    // ctx.createPattern(ctx, "repeat");
   // }

/**
function makeGrid() {
const canvas = document.getElementById("canTest");
    const ctx = canTest.getContext("2d");
    for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "#939394ff";
    ctx.fillRect(10, 10, 10, 10);
    ctx.fill();
    }
}


ctx.addEventListener("load", () => {
    const grid = ctx.makeGrid("repeat");
    ctx.fillStyle = grid;
    ctx.fillRect(10, 10, ctx.width, ctx.height);
})
    **/