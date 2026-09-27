window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    console.log('Hello, World!');

    // Set the canvas size to fill the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    // ctx.fillRect(50, 50, 100, 100);
    // ctx.fillStyle = 'red';
    // ctx.fillRect(200, 50, 100, 100);
    // ctx.fillStyle = 'green';


    //variabla
     let paint=false;

    canvas.addEventListener('mousedown', function(event) {
        paint=true;
    });

    canvas.addEventListener('mouseup', function(event) {
        paint=false;
    });

    canvas.addEventListener('mousemove',draw);

    function draw(e){
        if(paint) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }

 })
