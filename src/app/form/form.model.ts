
export class Form {
  public fname: string;
  public lname: string;
  public age: number;
  public gender: string;
  public mobilenum: number;


  constructor(fname: string, lname:string, age:number, gender: string, mobilenum: number) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
    this.mobilenum = mobilenum;
  }
}
