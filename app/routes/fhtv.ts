import express, { Request, Response, NextFunction } from 'express';
import { exec } from 'child_process';

const router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  exec('Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; Start "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" \'--start-fullscreen "https://www.youtube.com/watch?v=HFib76ySpbU"\' ; Start "C:\\Program Files\\AutoHotkey\\AutoHotkey.exe" C:\\dvlp\\cctv\\cmd\\fullscreen.ahk', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    res.send(`${stdout}<p>${stderr}<p>${error}`);
  })
});

export default router;
