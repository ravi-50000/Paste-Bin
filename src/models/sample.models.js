var mongoose=require('mongoose')
const Sample=mongoose.model('Sample',{
    author:String,
    title:String,
    description:String,
    id:String
});
exports.Sample=Sample;