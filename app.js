class Kue {
    constructor (gula, aksesoris, berat) {
        this._bahan = "tepung";
        this._gula = gula;
        this._aksesoris = aksesoris;
        this._berat = berat;
    }

    // Getter bahan
    get Bahan () {
        return this._bahan;
    }
    // Getter gula
    get Gula () {
        return this._gula;
    }
    // Getter aksesoris
    get Aksesoris () {
        return this._aksesoris;
    }
    // Getter berat
    get Berat () {
        return this._berat;
    }
    // Setter gula
    set gula (value) {
        this._gula = value;
    }
    // Setter aksesoris
    set aksesoris (value) {
        this_aksesoris = value;
    }
    // Setter berat
    set berat (value) {
        this._berat = value;
    } 
}; 

// class kueputu
class KuePutu extends Kue{
    constructor (gulalevel, ...args) {
        super(...args)
    this._gulalevel = gulalevel;
    }
    // getter gula level
    get gulalevel() {
        return this._gulalevel;
    }
};
// class kuecubit
class KueCubit extends Kue{
    constructor(...args) {
        super(...args);
        this._bahan = ["Tepung", "Telur"];
    }
}
// class kueketawa
class KueKetawa extends Kue{
    constructor(...params) {
        super(...params);
        this._bahan = ["Tepung", "Telur"];

    }
}

const kuePutuObj = new KuePutu (20, "Gula Jawa", "Daun Pisang", 10);
console.log(kuePutuObj);

const kueCubitObj = new KueCubit ("Gula Putih", "Messes", 20);
console.log(kueCubitObj);

const kueKetawaObj = new KueKetawa ("Gula Pasir", "Wijen", 5);
console.log(kueKetawaObj);
