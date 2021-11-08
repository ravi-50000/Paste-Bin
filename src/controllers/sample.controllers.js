const sampleService = require('../services/sample.services');

exports.putdata = async function(req,res){
    let result = await sampleService.putdata(req.body);
    //console.log(result);
    res.send(result);
}

exports.getdata = async function(req,res){
    let result = await sampleService.getdata(req.body);
    res.send(result);
}