var mouseEvent="empty";
var last_x, last_y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3 ;

        console.log("Last position of x and y coordinates =");
        console.log("x=" + last_x + "y=" + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("current position of x and y coordinates =");
        console.log("x="+ current_x +"y=" + current_y)
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x= current_x;
    last_y = current_y;

}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}



