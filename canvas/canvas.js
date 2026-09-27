// Wait until the whole page is loaded, then start.
window.addEventListener('load', function () {

    // Find the <canvas> in the HTML.
    const canvas = document.getElementById('canvas');

    // The "context" (ctx) is the toolbox we use to draw. Everything we draw
    // goes through it: ctx.fillRect, ctx.stroke, ctx.arc ...
    const ctx = canvas.getContext('2d');

    // Make the canvas fill the window (minus the panel at the top).
    // Important: the canvas needs its width/height in JavaScript, CSS is not enough.
    // Note: changing the size erases everything, so we do it only once here.
    // (We take away 4 pixels for the 2px black border on each side,
    //  otherwise the page gets scrollbars.)
    const panel = document.getElementById('panel');
    canvas.width = window.innerWidth - 4;
    canvas.height = window.innerHeight - panel.offsetHeight - 4;


    /* =========================================================
       PART 1 - HOW CANVAS DRAWS SHAPES  (examples to learn from)

       All the code below is commented out. Uncomment a block
       (remove the // at the start of the lines) to see it work.

       Two words you will see everywhere:
         fill   = paint the inside of the shape   -> fillStyle sets the color
         stroke = draw only the outline           -> strokeStyle sets the color

       The position (0, 0) is the TOP-LEFT corner.
         x grows to the right  ->
         y grows downwards     v
       ========================================================= */


    // --- A FILLED RECTANGLE -------------------------------------------
    // fillRect(x, y, width, height)
    // ctx.fillStyle = 'red';
    // ctx.fillRect(50, 50, 100, 80);


    // --- A RECTANGLE OUTLINE ------------------------------------------
    // lineWidth = how thick the outline is
    // ctx.strokeStyle = 'blue';
    // ctx.lineWidth = 4;
    // ctx.strokeRect(200, 50, 100, 80);


    // --- ERASE A RECTANGLE --------------------------------------------
    // clearRect makes that area transparent again.
    // ctx.clearRect(60, 60, 40, 40);


    // --- A LINE -------------------------------------------------------
    // A line is made in 3 steps:
    //   beginPath() -> start a new drawing
    //   moveTo()    -> put the pen down at a point (without drawing)
    //   lineTo()    -> move the pen to another point (drawing a line)
    //   stroke()    -> actually show the line on screen
    // ctx.beginPath();
    // ctx.moveTo(50, 200);
    // ctx.lineTo(250, 260);
    // ctx.strokeStyle = 'green';
    // ctx.lineWidth = 3;
    // ctx.stroke();


    // --- A TRIANGLE (or any shape with straight sides) ----------------
    // Same idea as a line, but with more points.
    // closePath() draws the last line back to the first point.
    // ctx.beginPath();
    // ctx.moveTo(150, 320);   // first corner
    // ctx.lineTo(250, 420);   // second corner
    // ctx.lineTo(50, 420);    // third corner
    // ctx.closePath();
    // ctx.fillStyle = 'orange';
    // ctx.fill();


    // --- A CIRCLE -----------------------------------------------------
    // arc(x, y, radius, startAngle, endAngle)
    // The angles are in radians, not degrees:
    //   a full circle = 2 * Math.PI
    //   half a circle =     Math.PI
    // ctx.beginPath();
    // ctx.arc(400, 150, 60, 0, 2 * Math.PI);
    // ctx.fillStyle = 'purple';
    // ctx.fill();


    // --- HALF A CIRCLE ------------------------------------------------
    // ctx.beginPath();
    // ctx.arc(400, 300, 60, 0, Math.PI);
    // ctx.stroke();


    // --- TEXT ---------------------------------------------------------
    // fillText(text, x, y)
    // ctx.font = '30px Arial';
    // ctx.fillStyle = 'black';
    // ctx.fillText('Hello canvas!', 500, 100);


    // --- ROUND LINE ENDS ----------------------------------------------
    // These two make free drawing look smooth instead of sharp.
    // We use them for real in Part 2.
    // ctx.lineCap = 'round';    // round ends of a line
    // ctx.lineJoin = 'round';   // round corners where lines meet


    /* =========================================================
       PART 2 - THE DRAW PANEL

       Now we let the user draw with the mouse.
       ========================================================= */

    // Find the controls from the HTML.
    const colorInput = document.getElementById('color');
    const sizeInput = document.getElementById('size');
    const sizeValue = document.getElementById('sizeValue');
    const eraserButton = document.getElementById('eraser');

    // Our two "memory" variables.
    let painting = false;    // true only while the mouse button is held down
    let erasing = false;     // true when the Eraser button is turned on

    // Round ends make the drawing look like a real pen.
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';


    // --- DRAWING WITH THE MOUSE ---------------------------------------

    // Mouse pressed: start painting and put the pen at the mouse position.
    // beginPath() is important: without it, the new line would be connected
    // to the place where we stopped drawing the last time.
    canvas.addEventListener('mousedown', function (event) {
        painting = true;
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY);
    });

    // Mouse moved: draw a small line to the new position, but only if the
    // button is being held down.
    canvas.addEventListener('mousemove', function (event) {
        if (!painting) return;   // not pressed? then do nothing

        ctx.lineWidth = Number(sizeInput.value);   // Number() because inputs give us text

        // The eraser is just a pen that draws with the background color.
        ctx.strokeStyle = erasing ? '#ffffff' : colorInput.value;

        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    });

    // Mouse released, or the mouse left the canvas: stop painting.
    canvas.addEventListener('mouseup', function () {
        painting = false;
    });

    canvas.addEventListener('mouseleave', function () {
        painting = false;
    });


    // --- THE BUTTONS --------------------------------------------------

    // Show the chosen size next to the slider.
    sizeInput.addEventListener('input', function () {
        sizeValue.textContent = sizeInput.value;
    });

    // Eraser on / off. The "active" class only changes how the button looks.
    eraserButton.addEventListener('click', function () {
        erasing = !erasing;
        eraserButton.classList.toggle('active', erasing);
    });

});
