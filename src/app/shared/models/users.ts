export class User {
    public id: string;
    public fname: string;
    public lname: string;
    public age: string;
    public gender: string;
    public category: string;
    public mobilenum: number;

    constructor(id: string, fname: string, lname: string, age: string, gender: string, category: string, mobilenum: number) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
        this.category = category;
        this.mobilenum = mobilenum;
    }
}