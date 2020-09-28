canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=400;
rover_y=300;
background_image="mars.jpg";
rover_image="rover.png";

function add() {
  background_imagetag=new Image();
  background_imagetag.onload=uploadBackground;
  background_imagetag.src=background_image;
  
  rover_imagetag=new Image();
  rover_imagetag.onload=uploadRover;
  rover_imagetag.src=rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadRover() {
    ctx.drawImage( rover_imagetag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="37") {
        //left();
        console.log("left");
    }

    if (keypressed=="38") {
        //up();
        console.log("up");
    }

    if (keypressed=="39") {
        //right();
        console.log("right");
    }

    if (keypressed=="40") {
        //down();
        console.log("down");
    }
}