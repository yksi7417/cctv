import express, { Request, Response, NextFunction } from 'express';
import { exec } from 'child_process';

const router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  exec('Start "C:\\dvlp\\cctv\\cmd\\ps1\\cctv4.ps1" ', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    res.send(`
      <html>
      
      <head>
        <title>中文国际亚洲</title>
        <link rel="stylesheet" href="/stylesheets/style.css">
        <link rel="icon" href="cctv.png" type="image/x-icon"/>
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
        <h1 style="color: rgb(255, 0, 0)">CCTV-4中文国际亚洲</h1>
        <img src="/cctv.png" />
      </body>
      </html>
          `);
        })
});

export default router;
