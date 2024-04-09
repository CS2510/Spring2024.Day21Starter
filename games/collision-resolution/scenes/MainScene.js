import "../prefabs/WallGameObject.js"
import "../components/KeyboardComponent.js"

const scale = 250;
const margin = 50


class PointGameObject extends GameObject{
  constructor(){
    super();
    this.addComponent(new Point())
    this.addComponent(new KeyboardComponent())
    this.addComponent(new PointConstraintsComponent())
  }
  start(ctx){
    this.transform.x = scale+margin-margin*2
    this.transform.y = scale+margin-margin*2
    super.start()

  }
}

class PointConstraintsComponent extends Component{
  update(ctx){
    if(this.transform.x < margin*2)
      this.transform.x = margin*2;
    if(this.transform.y < margin*2)
      this.transform.y = margin*2
    if(this.transform.x > scale*2)
      this.transform.x = scale*2
    if(this.transform.y > scale * 2)
      this.transform.y = scale*2
  }

}

/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("lightgray")

  }



  start(ctx) {
   

    GameObject.instantiate(new WallGameObject(), margin, scale + margin, margin * 2, scale * 2 - margin * 2)
    GameObject.instantiate(new WallGameObject(), scale * 2 + margin, scale + margin, margin * 2, scale * 2 - margin * 2)
    GameObject.instantiate(new WallGameObject(), scale + margin, margin, scale * 2 - margin * 2, margin * 2)
    GameObject.instantiate(new WallGameObject(), scale + margin, scale * 2 + margin, scale * 2 - margin * 2, margin * 2)
    
    
    GameObject.instantiate(new WallGameObject(), scale + margin, scale + margin, margin * 4, margin * 2)
    GameObject.instantiate(new WallGameObject(), scale + margin, scale + margin, margin * 2, margin * 4)

    GameObject.instantiate(new PointGameObject())


  }
}

window.MainScene = MainScene