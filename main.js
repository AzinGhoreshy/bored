const { app, BrowserWindow } = require('electron')

const main_window = () => 
{
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('views/index.html')
}

app.whenReady().then(() => 
{
    main_window()
})

app.on('window-all-closed', () => 
{
    if (process.platform !== 'darwin') app.quit()
})