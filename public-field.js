class Person {
    name;
    hobi;
    gender = "laki";

    constructor(name,hobi){
        this.name = name;
        this.hobi = hobi;
    }
}

const abi = new Person("abi","ngoding");
console.log(abi);
console.table(abi);