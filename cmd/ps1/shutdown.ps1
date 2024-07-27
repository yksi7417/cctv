Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; 
shutdown /s /t 0 

