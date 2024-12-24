Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; 
Start "C:\Program Files\Google\Chrome\Application\chrome.exe" '--hide-crash-restore-bubble --start-fullscreen "https://www.youtube.com/watch?v=SdzewdkJa-o" ' 
Start "C:\Program Files\AutoHotkey\AutoHotkey.exe" C:\dvlp\cctv\cmd\fullscreen.ahk