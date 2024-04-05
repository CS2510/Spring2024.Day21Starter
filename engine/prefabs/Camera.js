class Camera extends GameObject{
  
  constructor(){
    super("Camera")
  }

  start(){
    this.addComponent(new Camera())
  }

  static{
    Camera._main = new Camera();
  }
  
  static get main(){
    return Camera._main
  }
}

window.Camera = Camera;