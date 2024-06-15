import express, { Request, Response, NextFunction } from 'express';
import { exec } from 'child_process';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {

  exec('net user asi7888 /active: no; net user asi7888', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    res.send(`${stdout}\n ${error}\n ${stderr}`);
  })
});

export default router;
