var express = require('express');
var router = express.Router();
let Barang = require('../models/barang')
var mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', function(req, res) {
    res.send({ products: products });
});

router.get('/list', (req, res) => {
  Barang.find({}).exec((err, val) => {
    if(err){
      console.log('ga masuk')
    }else{
      // console.log('masuk')
      res.json({
        data: val
      })
    }
  })
})

router.get('/editjumlah/:id', (req, res) => {
  Barang.findById(req.params.id, (err, data) => {
    res.render('editjumlah', {
      nama: data.nama,
      jumlah: data.jumlah,
      id: req.params.id
    })
  })
})

router.post('/editjumlah/:id', (req, res) => {
  let data = {
    nama: req.body.nama,
    jumlah: req.body.jumlah
  }
  Barang.findById(req.params.id, (err, update) => {
    update.set(data)
    update.save(()=>{
      res.redirect('/')
    })
  })
})

router.post('/add', (req, res) => {
  let data = {
    nama: req.body.nama,
    jumlah: 0
  }
  let barang = new Barang(data)
  barang.save((err, response)=>{
    res.json({
      data: response
    })
  })
})

router.put('/update/:id', function (req, res) {
  var id = req.params.id;
  var nama = req.body.nama;

  console.log(id, nama);

  Barang.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, { nama: nama }, function (err, result) {
    console.log(err);
    console.log(result);
    res.json({
      data: 'Berhasil Update'
    })
  })


})

module.exports = router;
