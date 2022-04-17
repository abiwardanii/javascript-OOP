class Person {
    constructor(fistname,lastname){
        this.fistname = fistname;
        this.lastname = lastname;
    }

    get fullname(){
        return `${this.fistname} ${this.lastname}`;
    }

    set fullname(value){
        const names = value.split(' ');
        this.fistname = names[0];
        this.lastname = names[1];
    }
}

const abi = new Person('Abi','wardani');
console.log(abi);
console.log(abi.fullname);
abi.fullname = "tomas wijaya";
console.log(abi.fullname);