class CameraMoverComponent extends Component{
  start(ctx){

  }
  update(ctx){
    Camera.main.transform.x += Time.deltaTime * 20;
    // Camera.main.transform.scaleX = 1 + Math.cos(Time.time)
    let zoom = 10
    Camera.main.transform.scaleX = zoom
    Camera.main.transform.scaleY = zoom
  }
  
}

window.CameraMoverComponent = CameraMoverComponent;