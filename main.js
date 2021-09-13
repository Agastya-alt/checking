var canvas= new fabric.Canvas('myCanvas');

 player_x=100;
 player_y=100

block_image_width=30;
 block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){

fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,left:player_x

    });
    canvas.add(player_object);

});

}

function new_Image(get_image){
    fabric.Image.fromURL("get_image", function(Img){
        block_image_object=Img;

        block_image_object=scaleToWidth(block_image_width);
        block_image_height=scaleToWidth(block_image_height);
        block_image_object.set({
            top:player_y,left:player_x

        });

        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

keypressed = e.keyCode;
console.log(keypressed);

if (e.shiftKey==true && keypressed=='80'){
    console.log("shift and p pressed together");

    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById(current_width).innerHTML=block_image_width;
    document.getElementById(current_height).innerHTML=block_image_height;
}
if (e.shiftKey==true && keypressed=='77'){

console.log("shift and m pressed together");

block_image_width=block_image_width-10;
block_image_height=block_image_height-10;

document.getElementById(current_width).innerHTML=block_image_width;
document.getElementById(current_height).innerHTML=block_image_height;

}

if (keypressed=='38'){
up();
console.log("up");
}

if (keypressed=='39'){
    right();
    console.log("right");
}
if (keypressed=='37'){
    left();
    console.log("left");
}
if (keypressed=='40'){
    down();
    console.log("down");
}

if (keypressed=='87'){
    new_Image('wall.jpg');
    console.log("w");

}
if (keypressed=='71'){
    new_Image('ground.png');
    console.log("g");

}
if (keypressed=='76'){
    new_Image('light_green.png');
    console.log("l");

}

if (keypressed=='84'){
    new_Image('trunk.jpg');
    console.log("t");
}
if (keypressed=='82'){
    new_Image('roof.jpg');
    console.log("r");
}
if (keypressed=='89'){
    new_Image('yellow_wall.png');
    console.log("y");
}
if (keypressed=='68'){
    new_Image('dark_green.png');
    console.log("d");
}
if (keypressed=='85'){
    new_Image('unique.png');
    console.log("u");
}
if (keypressed=='67'){
    new_Image('cloud.jpg');
    console.log("c");
}
}