class Hewan {
    makan(){
        console.log("sedang makan");
    }
}

class Kucing extends Hewan {
    minum(){
        super.makan(); //memanggil method makan dari class Hewan 
        console.log("sedang minum");
    }
}
const kucing = new Kucing();
kucing.minum();