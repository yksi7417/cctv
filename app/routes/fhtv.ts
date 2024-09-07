import express, { Request, Response, NextFunction } from 'express';
import { exec } from 'child_process';

const router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  exec('Start "C:\\dvlp\\cctv\\cmd\\ps1\\fhtv.ps1" ', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
  })
  res.send(`
<html>

<head>
  <title>凤凰卫视</title>
  <link rel="stylesheet" href="/stylesheets/style.css">
  <link rel="icon" href="fhtv.png" type="image/x-icon"/>
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
  <h1 style="color: rgb(201, 169, 25)">凤凰卫视</h1>
  <img src="/fhtv.png" />

</body>

</html>
    `);
});

export default router;
