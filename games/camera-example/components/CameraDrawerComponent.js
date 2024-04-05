class CameraDrawerComponent extends Component{
  draw(ctx){
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(Camera.main.transform.x, Camera.main.transform.y, 10, 0, Math.PI*2)
    ctx.fill()
  }
}

window.CameraDrawerComponent = CameraDrawerComponent;