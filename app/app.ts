import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import lockRouter from './routes/lock';
import unlockRouter from './routes/unlock';
import rebootRouter from './routes/reboot';
import shutdownRouter from './routes/shutdown';
import cctv4Router from './routes/cctv4';
import breathRouter from './routes/breath';
import fhtvRouter from './routes/fhtv';
import zoomRouter from './routes/zoom';
import tvbRouter from './routes/tvb';
import daaiRouter from './routes/daai';
import taiwanRouter from './routes/taiwan';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lock', lockRouter);
app.use('/unlock', unlockRouter);
app.use('/reboot', rebootRouter);
app.use('/shutdown', shutdownRouter);
app.use('/zoom', zoomRouter);
app.use('/cctv4', cctv4Router);
app.use('/breath', breathRouter);
app.use('/fhtv', fhtvRouter);
app.use('/tvb', tvbRouter);
app.use('/daai', daaiRouter);
app.use('/taiwan', taiwanRouter);

export default app;
