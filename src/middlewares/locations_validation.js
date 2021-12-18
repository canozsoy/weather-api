import locationSchema from '../schemas/locations_schema.js';
import { ValidationError } from '../constants/errors.js';
import { formatValidationError } from '../utils/formatter.js';

const locationValidation = (validationKey, objectToValidate) => (req, res, next) => {
    const validationResult = locationSchema[validationKey]
        .validate(req[objectToValidate], { abortEarly: false });

    if (validationResult.error) {
        return next(new ValidationError(
            'Location Validation Error',
            formatValidationError(validationResult.error),
        ));
    }
    return next();
};

export default locationValidation;
