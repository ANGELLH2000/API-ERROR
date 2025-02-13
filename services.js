import mongoose from "mongoose";

mongoose.connect('mongodb+srv://user_libreria:foFK6LqV7XiPMtC3@basemongodb.a6axr.mongodb.net/BD_ERRORES').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const dataSchema = new mongoose.Schema({
    data: { type: Object, required: true }
});

const DataModel = mongoose.model('Errores', dataSchema, 'Errores');

export async function insertData(data) {
    try {
        const newData = new DataModel({ data });
        await newData.save();
        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

