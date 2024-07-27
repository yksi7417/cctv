Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; 
shutdown /r /t 0 

