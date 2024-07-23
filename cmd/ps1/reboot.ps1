Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; 
Start "shutdown /r /t 0" 

