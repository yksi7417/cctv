Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; 
Start "shutdown /s /t 0" 

