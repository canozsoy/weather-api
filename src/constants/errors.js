/* eslint-disable max-classes-per-file */
class ApiError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}

class NotFoundError extends ApiError {
    constructor(item) {
        super(404, `${item} Not Found`);
    }
}

class BadRequest extends ApiError {
    constructor(message) {
        super(400, message);
    }
}

class ValidationError extends BadRequest {
    constructor(message, details) {
        super(message);
        this.details = details;
    }
}

class ServerError extends ApiError {
    constructor() {
        super(500, 'Internal Server Error');
    }
}

const errorMapping = {
    LOCATIONS_NOT_FOUND: () => new NotFoundError('Locations'),
    LOCATION_NOT_FOUND: () => new NotFoundError('Location'),
    SERVER_ERROR: () => new ServerError(),
    VALIDATION_ERROR: (message = 'Validation Error', details = {}) => new ValidationError(message, details),
};

export {
    errorMapping,
    ApiError,
    ValidationError,
};
