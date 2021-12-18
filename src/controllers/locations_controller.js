import locationsServices from '../services/locations_services.js';
import weatherServices from '../services/weather_services.js';
import ApiResponse from '../constants/responses.js';

const locationGetAll = async (req, res, next) => {
    let locations;

    try {
        locations = await locationsServices.getAllLocations();
    } catch (err) {
        return next(err);
    }

    return res.json(new ApiResponse(locations));
};

const locationPost = async (req, res, next) => {
    const {
        latitude, longitude, name, minWeather, maxWeather,
    } = req.body;

    let location;

    try {
        location = await locationsServices.createLocation(
            latitude,
            longitude,
            name,
            minWeather,
            maxWeather,
        );
    } catch (err) {
        return next(err);
    }

    return res.json(new ApiResponse(location));
};

const weatherGet = async (req, res, next) => {
    const { id } = req.params;

    let location;

    try {
        location = await weatherServices.getWeather(id);
    } catch (err) {
        return next(err);
    }

    return res.json(new ApiResponse(location));
};

const locationPut = async (req, res, next) => {
    const { id } = req.params;
    const changeBody = req.body;

    let updatedLocation;

    try {
        updatedLocation = await locationsServices.updateLocation(id, changeBody);
    } catch (err) {
        return next(err);
    }

    return res.json(new ApiResponse(updatedLocation));
};

export default {
    locationGetAll,
    locationPost,
    weatherGet,
    locationPut,
};
