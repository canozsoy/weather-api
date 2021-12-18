import locationServices from './locations_services.js';
import { formatWeather } from '../utils/formatter.js';

const generateWeather = (
    minWeather,
    maxWeather,
) => Math.floor(
    Math.random() * (maxWeather - minWeather + 1) + minWeather,
);

const getWeather = async (id) => {
    const location = await locationServices.findLocation(id);

    // Generate random weather info between min and max
    const weather = generateWeather(location.minWeather, location.maxWeather);
    const formattedLocation = formatWeather(location, weather);

    return formattedLocation;
};

export default { getWeather };
