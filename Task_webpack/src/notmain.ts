class MyPoint {
  
    x: string;
    y: string;
    constructor (x: string, y: string) {
      this.x = x;
      this.y = y;
    }
    draw() {
      return this.x+" "+this.y;
    }
    
 }
 
 export {MyPoint}
 
 