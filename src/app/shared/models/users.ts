export class User {
    public id: string;
    public firstName: string;
    public lastName: string;
    public age: string;
    public gender: string;
    public category: string;
    public contactNumber: number;

    constructor(id: string, firstName: string, lastName: string, age: string, gender: string, category: string, contactNumber: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.category = category;
        this.contactNumber = contactNumber;
    }
}