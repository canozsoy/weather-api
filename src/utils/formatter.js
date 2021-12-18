/* function formatString(val) {
    const replaced = val.replace(/"/g, '');
    return replaced.charAt(0).toUpperCase() + replaced.slice(1);
} */

function formatValidationError(error) {
    return {
        // eslint-disable-next-line no-underscore-dangle
        body: error._original,
        messages: error.details.map((x) => ({ message: x.message })),
    };
}

function formatWeather(location, weather) {
    const { minWeather, maxWeather, ...rest } = location;
    return {
        ...rest,
        weather,
    };
}

export {
    formatValidationError,
    formatWeather,
};
