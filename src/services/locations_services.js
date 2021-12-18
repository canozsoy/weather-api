import Locations from '../models/Locations.js';

const getAllLocations = async () => {
    const select = 'latitude longitude';

    const locations = await Locations.find({}, select)
        .lean()
        .exec();

    if (!locations.length) {
        throw new Error('LOCATIONS_NOT_FOUND');
    }

    return locations;
};

const createLocation = async (latitude, longitude, name, minWeather, maxWeather) => {
    const location = new Locations({
        latitude, longitude, name, minWeather, maxWeather,
    });
    await location.save();
    return location;
};

const findLocation = async (id) => {
    const select = 'name minWeather maxWeather';
    const location = await Locations.findById(id, select)
        .lean()
        .exec();

    if (!location) {
        throw new Error('LOCATION_NOT_FOUND');
    }

    return location;
};

const updateLocation = async (id, body) => {
    const location = await Locations.findByIdAndUpdate(
        id,
        body,
        { new: true },
    ).lean()
        .exec();

    if (!location) {
        throw new Error('LOCATION_NOT_FOUND');
    }

    return location;
};

const deleteLocation = async (id) => {
    const location = await Locations.findByIdAndRemove(id)
        .lean()
        .exec();

    if (!location) {
        throw new Error('LOCATION_NOT_FOUND');
    }

    return null;
};

export default {
    getAllLocations,
    createLocation,
    findLocation,
    updateLocation,
    deleteLocation,
};
