Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; 
Start "C:\Program Files\Google\Chrome\Application\chrome.exe" '--disable-features=InfiniteSessionRestore --start-fullscreen "https://www.youtube.com/watch?v=HFib76ySpbU" ' 
Start "C:\Program Files\AutoHotkey\AutoHotkey.exe" C:\dvlp\cctv\cmd\fullscreen.ahk