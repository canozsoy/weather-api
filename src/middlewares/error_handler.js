import { ApiError, errorMapping } from '../constants/errors.js';

const errorHandler = (err, req, res, next) => {
    let responseError;

    if (!(err instanceof ApiError)) {
        const errorCaller = errorMapping[err.message]
            ? errorMapping[err.message]
            : errorMapping.SERVER_ERROR;

        responseError = errorCaller();
    } else {
        responseError = err;
    }

    if (res.headersSent) {
        return next(responseError);
    }

    return res.status(responseError.status)
        .json(responseError);
};

export default errorHandler;
