#!/usr/bin/env node

import { Request, Response, NextFunction } from 'express';
import app from '../app';
import https from 'https';
import fs from 'fs';
import { execSync } from 'child_process';

const port = 443;

const options = {
  key: fs.readFileSync('../win-v8eiv3n3rp3.tail356fe.ts.net.key'),
  cert: fs.readFileSync('../win-v8eiv3n3rp3.tail356fe.ts.net.crt')
};

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
    return next();
  }
  else {
    console.log(`redirecting https://${req.headers.host}${req.url}`)
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

const httpServer = https.createServer(options, app);
httpServer.listen(port);