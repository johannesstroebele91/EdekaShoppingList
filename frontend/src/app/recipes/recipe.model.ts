export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  // So we can pass the arguments right to the constructor
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
