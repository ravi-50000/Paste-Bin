const shortid=require('shortid');
const sampleModel = require('../models/sample.models');

exports.putdata= async function(sampleItem){
    const id=shortid.generate();
    sampleItem.id=id;
    const sample = new sampleModel.Sample(sampleItem);
    return await sample.save();
}

exports.getdata = async function(data){
    return await sampleModel.Sample.findOne({id:data.id});
    
}