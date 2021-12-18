import express from 'express';
import dotenv from 'dotenv';
import connectMongo from './src/models/config.js';
import locationsRouter from './src/routes/locations.js';
import notFoundRouter from './src/routes/not_found.js';
import errorHandler from './src/middlewares/error_handler.js';

dotenv.config();

const app = express();

connectMongo().catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/locations', locationsRouter);
app.use('*', notFoundRouter);

app.use(errorHandler);

app.listen(process.env.PORT || 3000);
