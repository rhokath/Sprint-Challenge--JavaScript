
class CuboidMaker {
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }//volume method

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }//surfaceArea method
    
  }//CuboidMaker

  const cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5,
  })

  class Cubemaker extends CuboidMaker {
      constructor(cubeAttributes){
          super(cubeAttributes);    
      }
      volumeCube(){
          return this.height * this.height * this.height;
      }//volumeCube method

      surfaceAreaCube(){
          return 6 * (this.height * this.height);
      }//surfaceAreaCube method

  }//Cubemaker class

  const cube = new Cubemaker ({
      height: 5,
  })

  console.log(cube.volumeCube())
  console.log(cube.surfaceAreaCube())





// Test your volume and surfaceArea methods by uncommenting the logs below:


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.




  

  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130