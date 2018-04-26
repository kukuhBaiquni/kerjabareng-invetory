let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Barang = new Schema({
    nama: String,
    jumlah: Number
})

module.exports = mongoose.model('Barang', Barang)