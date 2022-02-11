// Class
// selalu diawali dengan huruf kapital
class Animal{
    //constructor
    // method khusus didalam class
    // bisa mengisi parameter
    constructor(name,age){
        console.log("membuat contruscctor");
        this.name = name;
        this.age = age;
    }
    //method
    // method ada fucntion yang ada didalama class
    // method bisa diisi property
    salam(){
        console.log(`halo ${this.name}`);
    }
    makan(){
        //method lain bisa juga dijalankan di dalam method
        // caranya dengan menggunakan this
        this.salam();

        console.log(`${this.name} sedang makan`);
    }
}

//inheritance (pewarisan class)
// cara membuat class baru dari turunan parent class
// class rabbit adalah turunan dari class animal atau disebut child class
class Rabbit extends Animal{
    // di dalam child class juga bisa menambahkan method
    warna(){
        console.log(`${this.name} adalah warna biru`);
    }

    //override method
    // method yang ada di child class bisa menimpa method yang ada di parent class
    makan(){
        this.salam();
        console.log(`${this.name} sedang makan`);
    }

    //overriding constructor
    // constructor yang ada di child class bisa menimpa constructor yang ada di parent class
    constructor(name,age,breed){
        //super() digunakan untuk mengakses property dari parent class
        super(name,age);
        this.breed = breed;
    }
}

//instance
const hewan = new Animal(); //membuat objek dari class Animal(pastikan class Animal sudah di definisikan)

// cara mengakses property
hewan.name = 'hewan';
hewan.age = 3;

//print
console.log(hewan);
console.log(`Nama: ${hewan.name}`);
console.log(`Umur: ${hewan.age}`);

//print method
hewan.makan();

console.log("----------------------------------");

const rabbit = new Rabbit('bunny',4,'indonesia');
// cara mengakses property
// rabbit.name = 'bunny';
// rabbit.age = 6;

//print
console.log(rabbit);
console.log(`Nama: ${rabbit.name}`);
console.log(`Umur: ${rabbit.age}`);
console.log(`Ras: ${rabbit.breed}`);


//print method
rabbit.makan();
rabbit.warna();