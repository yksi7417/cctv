powershell -command "Get-Process chrome | ForEach-Object { $_.CloseMainWindow() | Out-Null}"
start https://www.youtube.com/watch?v=twhG7_jvA8g