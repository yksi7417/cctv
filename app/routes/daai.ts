import express, { Request, Response, NextFunction } from 'express';
import { exec } from 'child_process';
const router = express.Router();

/* GET https://www.youtube.com/watch?v=E0zhe2gkXBs */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  exec('Start "C:\\dvlp\\cctv\\cmd\\ps1\\daai.ps1" ', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    res.send(`${stdout}<p>${stderr}<p>${error}`);
  })
});

export default router;
