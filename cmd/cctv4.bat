powershell -command "Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}"
start https://www.youtube.com/watch?v=SdzewdkJa-o