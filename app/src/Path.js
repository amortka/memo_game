export default class Path {
  constructor(...points) {
    this.points = points.map((point) => {
      return {
        x: point[0],
        y: point[1]
      }
    });

    console.log('created path with: ', this.points);
  }

  getFirstPoint() {
    return this.points[0];
  }

  getNextPoint(currentPoint) {
    
  }

  getPoints() {
    return this.points
  }
}
