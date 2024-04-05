class ControllerGameObject extends GameObject{
  constructor(){
    super("ControllerGameObject")
  }
  start(ctx){
    this.addComponent(new CloudGeneratorComponent())
    this.addComponent(new CameraMoverComponent())
    this.addComponent(new CameraDrawerComponent())
    super.start(ctx)
  }
  
}

window.ControllerGameObject = ControllerGameObject;