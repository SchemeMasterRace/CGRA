/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {
	constructor(scene, x = 0, z = 0, y = 0, ang = 0) {
    super(scene);
    
    this.x = x;
    this.y = y;
    this.z = z;
    this.ang = ang;
    this.normals = []; 

    this.branch = new MyCylinder(this.scene, 10);
    this.circle = new MyCircle(this.scene, 10, 0.5);

  }
  display(){
    this.scene.branchTxt.apply();
    
    this.scene.pushMatrix();
    this.scene.translate(this.x, this.y, this.z);
    this.scene.rotate(this.ang, 0, 1, 0);
    this.scene.rotate(Math.PI/2, 1, 0, 0);
    this.scene.scale(0.25, 1.5, 0.25);
    this.branch.display();
    this.scene.branchEndTxt.apply();

    this.scene.pushMatrix();
    this.scene.rotate(Math.PI, 0, 0, 1);
    this.circle.display();
    this.scene.popMatrix();

    this.scene.translate(0, 1, 0);
    this.circle.display();
    this.scene.popMatrix();
    
  }
  enableNormalViz(){
    this.branch.enableNormalViz();
  }
  disableNormalViz(){
    this.branch.disableNormalViz();
  }
} 

