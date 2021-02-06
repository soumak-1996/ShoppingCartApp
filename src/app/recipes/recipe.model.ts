export class Recipe{
public Name : string;
public Description : string;
public Imagepath : string;

constructor(name : string,desc:string,image:string) {
    this.Name = name;
    this.Description = desc;
    this.Imagepath = image;
}
}