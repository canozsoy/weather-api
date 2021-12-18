import mongoose from 'mongoose';

const { Schema } = mongoose;

const Locations = new Schema(
    {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        name: { type: String, required: true },
        minWeather: { type: Number, required: true },
        maxWeather: { type: Number, required: true },
    },
    { versionKey: false },
);

export default mongoose.model('Locations', Locations);
