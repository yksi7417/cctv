import express, { Request, Response, NextFunction } from 'express';
import { exec } from 'child_process';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  exec('shutdown /s /t 0', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    res.send(`${stdout}`);
  })
});

export default router;
