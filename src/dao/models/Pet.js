import mongoose from 'mongoose';

const collection = 'Pets';

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    specie:{
        type:String,
        required:true
    },
    birthDate:Date,
    image:String
})

const petModel = mongoose.model(collection,schema);

export default petModel;