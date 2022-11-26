canvas=document.getElementById("MYcanvas");
ctx=canvas.getContext("2d");
color="yellow";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);

}
function circle(mouse_x,mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth = 4;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
} 
function borrar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}