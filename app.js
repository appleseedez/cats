// all the module needed
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('lodash');
var morgan = require('morgan');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

var router = express.Router();
router.get('/',function(req,res){
  res.json({message:'Valar Morghulis'});
});

router.get('/provinces/:provinceId/districts/:districtId',function(req,res){
  res.json({provinceId:req.params.provinceId,
            districtId:req.params.districtId
            });
});

//testFun('/provinces/:provinceId/districts/:districtId',{provinceId:123,districtId:123})


app.use('/api/global',router);



app.listen(3001,function(){
  console.log('Express Server is started on port 3001')
});
