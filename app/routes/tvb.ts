import express, { Request, Response, NextFunction } from 'express';
import { exec } from 'child_process';
const router = express.Router();

/* GET https://news.tvb.com/tc/live/83 */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  exec('Start "C:\\dvlp\\cctv\\cmd\\ps1\\tvb.ps1" ', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    res.send(`${stdout}<p>${stderr}<p>${error}`);
  })
});

export default router;
