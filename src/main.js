const { app, BrowserWindow, Tray, Menu } = require('electron')

let tray = null

const main_window = () => 
{
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        center: true,
        autoHideMenuBar: true,
        resizable: false,
        icon: __dirname + "/images/logo/logo_xsmall.png"
    })
  
    win.loadFile(__dirname + '/views/index.html')
}

const close = () =>
{
    if (process.platform !== 'darwin') app.quit()
}

app.whenReady().then(() => 
{
    tray = new Tray(__dirname + "/images/logo/logo_xsmall.png")

    if (app.dock) app.dock.hide()

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Show Welcome', type: 'normal', click() { main_window() } },
        { label: 'Help', type: 'normal' },
        { label: 'Close Bored', type: 'normal', click() { close() } },
    ])

    tray.setContextMenu(contextMenu)

    tray.on("click", () => main_window())

})

app.on('window-all-closed', () => {})