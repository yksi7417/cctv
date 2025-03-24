Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; 
Start "C:\Program Files\Google\Chrome\Application\chrome.exe" '--hide-crash-restore-bubble --start-fullscreen "https://www.youtube.com/watch?v=EUnIQqLMWJM&list=PLfC4_Ss5UeYQWGja_aD2_3840XWke6tmT" ' 
Start "C:\Program Files\AutoHotkey\AutoHotkey.exe" C:\dvlp\cctv\cmd\fullscreen.ahk