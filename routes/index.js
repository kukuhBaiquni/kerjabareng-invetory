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

router.post('/add', (req, res) => {
  let data = {
    nama: req.body.nama,
    jumlah: 0
  }
  console.log(data)
  let barang = new Barang(data)
  barang.save((err, response)=>{
    res.json({
      data: response
    })
  })
})

// router.put('/update/:id', function (req, res) {
//   var id = req.params.id;
//   var nama = req.body.nama;

//   var found = false;

// })

module.exports = router;
