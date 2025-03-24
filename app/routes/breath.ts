import express, { Request, Response, NextFunction } from 'express';
import { exec } from 'child_process';

const router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  exec('Start "C:\\dvlp\\cctv\\cmd\\ps1\\breath.ps1" ', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    res.send(`
      <html>
      
      <head>
        <title>呼吸養生術</title>
        <link rel="stylesheet" href="/stylesheets/style.css">
        <link rel="icon" href="breath.png" type="image/x-icon"/>
      </head>
      
      <body>
        <div id="spinner" class="spinner"></div>
        <script>
          window.onload = function() {
            setTimeout(() => {
              window.location.href = 'index.html';
            }, 5000); 
          };
        </script>
        <h1 style="color: rgb(255, 0, 0)">呼吸養生術</h1>
        <img src="/breath.png" />
      </body>
      </html>
          `);
        })
});

export default router;
