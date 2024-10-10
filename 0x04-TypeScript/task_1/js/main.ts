// Define the Teacher interface
interface Teacher {
    readonly firstName: string;  // Readonly makes it modifiable only on initialization
    readonly lastName: string;   // Readonly ensures it can't be modified later
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // Optional attribute
    location: string;
    [key: string]: any;          // This allows adding any additional properties dynamically
}

// Create a Teacher class implementing the interface
class TeacherClass implements Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    [key: string]: any;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, additionalAttributes: any = {}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;

        // Assign any additional attributes to the teacher object
        Object.assign(this, additionalAttributes);
    }
}