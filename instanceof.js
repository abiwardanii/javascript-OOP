class Hewan {

}
class Pet{

}

const kucing = new Hewan();
const anjing = new Pet();
console.log(kucing instanceof Hewan);
console.log(anjing instanceof Pet);
console.log(anjing instanceof Hewan);
console.log(kucing instanceof Pet);
