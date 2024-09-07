Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; 
Start "C:\Program Files\Google\Chrome\Application\chrome.exe" '--hide-crash-restore-bubble --start-fullscreen "https://us05web.zoom.us/j/9698742060?pwd=vilTb9YCPuqvHrjPVMgJ8tSUidgyFy.1" ' 
Start-Sleep -Seconds 10
Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}; 
