@echo put this file located in %appdata%/Microsoft/Windows/Start Menu/Programs/Startup/
powershell C:\dvlp\cctv\cmd\ps1\fhtv.ps1
START /B CMD.EXE /C c:\dvlp\cctv\start-caddy.bat
cd c:\dvlp\cctv
tailscale cert win-v8eiv3n3rp3.tail356fe.ts.net
cd c:\dvlp\cctv\app
npm start
