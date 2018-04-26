var express = require('express');
var router = express.Router();
let Barang = require('../models/barang')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', (req, res) => {
  Barang.find({}).exec((err, val) => {
    if(err){
      console.log('ga masuk')
    }else{
      console.log('masuk')
    }
  })
})

router.post('/add', (req, res) => {
  let data = {
    nama: req.body.nama,
    jumlah: req.body.jumlah
  }
  console.log(data)
  let barang = new Barang(data)
  barang.save((err, response)=>{
    res.json({
      data: response
    })
  })
})

module.exports = router;
