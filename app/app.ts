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
app.use('/reboot', shutdownRouter);

export default app;
