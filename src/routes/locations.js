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
        locationsValidation('locationGet', 'params'), // check the req.params id
        locationsValidation('locationPut', 'body'), // check req.body
        locationsController.locationPut,
    )
    .delete(
        locationsValidation('locationGet', 'params'),
        locationsController.locationDelete,
    );
export default router;
