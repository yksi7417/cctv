Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; 
Start "C:\Program Files\Google\Chrome\Application\chrome.exe" '--hide-crash-restore-bubble --start-fullscreen "https://youtu.be/tlFHfo56U_c?si=ZSyirFPctl68NRVe&t=507" ' 
Start "C:\Program Files\AutoHotkey\AutoHotkey.exe" C:\dvlp\cctv\cmd\fullscreen.ahk