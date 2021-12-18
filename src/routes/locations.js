import express from 'express';
import locationsValidation from '../middlewares/locations_validation.js';
import locationsController from '../controllers/locations_controller.js';

const router = express.Router();

router.route('/')
    .get(
        locationsController.locationGetAll,
    )
    .post(
        locationsValidation('locationPost', 'body'),
        locationsController.locationPost,
    );

router.route('/:id')
    .get(
        locationsValidation('locationGet', 'params'),
        locationsController.weatherGet,
    )
    .put(
        locationsValidation('locationPut'),
        locationsController.locationPut,
    );

export default router;
