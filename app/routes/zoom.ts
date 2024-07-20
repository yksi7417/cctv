import express, { Request, Response, NextFunction } from 'express';
import { exec } from 'child_process';
const router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  exec('Start "C:\\dvlp\\cctv\\cmd\\ps1\\zoom.ps1" ', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    res.send(`${stdout}<p>${stderr}<p>${error}`);
  })
});

export default router;
