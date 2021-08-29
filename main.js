car1="Carno1.jpg";
car2 = "Carno2.jpg";
car_x = 10;
car_y = 10;
car2_x = 10;
car2_y = 140;
carheight = 100;
carwidth = 100;
car2height = 100;
car2width = 100;
background="Canvasback.jpg"
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

function add(){
    background_img= new Image();
    background_img.onload = uploadBackground;
    background_img.src = background;

    car1_img= new Image();
    car1_img.onload = uploadcar;
    car1_img.src = car1 ;

    car2_img = new Image();
    car2_img.onload = uploadcar2;
    car2_img.src = car2;
}

function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadcar(){
    ctx.drawImage(car1_img, car_x, car_y, carwidth, carheight);
}
function uploadcar2(){
    ctx.drawImage(car2_img, car2_x, car2_y, car2width, car2height);
} 

window.addEventListener("keydown", my_kedow);

function my_kedow(e){

   keypressed=e.keyCode;
   console.log(keypressed);   
    if(keypressed == '38')
    {
        up();
        console.log("up");
    }

    if(keypressed == '40')
    {   
        down();
        console.log("down");
    }

    if(keypressed == '37')
    {
        left();
        console.log("left");
    }

    if(keypressed == '39')
    {
        right();
        console.log("right");
    }
    if(keypressed == '87')
    {
        w();
        console.log("w");
    }

    if(keypressed == '83')
    {   
        s();
        console.log("s");
    }

    if(keypressed == '65')
    {
        a();
        console.log("a");
    }

    if(keypressed == '68')
    {
        d();
        console.log("d");
    }
    if(car_x >= 700){
        console.log("The super Space Car won the time ");
        document.getElementById('gamestatus').innerHTML = "Careo the Great Won";
    } 
    if(car2_x >= 700){
        console.log("The super Earth Car won the time ");
        document.getElementById('gamestatus').innerHTML = "Bareo the Great Won";
    } 
    
}
  
    


function up(){
    if(car_y >=0){
        car_y = car_y-10;
        console.log("When up arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}
function down(){
    if(car_y <= 500){
        car_y = car_y+10;
        console.log("When up arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
} function left(){
    if(car_x >=0){
        car_x =car_x-10;
        console.log("When up arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
} function right(){
    if(car_x <= 700){
        car_x =car_x+10;
        console.log("When up arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
} 
function w(){
    if(car2_y >=0){
        car2_y = car2_y-10;
        console.log("When up arrow is pressed = " + car2_x + " - " + car2_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}
function s(){
    if(car2_y <= 500){
        car2_y = car2_y+10;
        console.log("When up arrow is pressed = " + car2_x + " - " + car2_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
} function a(){
    if(car2_x >=0){
        car2_x =car2_x-10;
        console.log("When up arrow is pressed = " + car2_x + " - " + car2_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
} function d(){
    if(car2_x <= 700){
        car2_x =car2_x+10;
        console.log("When up arrow is pressed = " + car2_x + " - " + car2_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
} 


