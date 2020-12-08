const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 376,
    height: 600,
    minWidth: 376,
    maxWidth: 376,
    minHeight: 600,
    maximizable: false,
    fullscreenable: false,
    show: false,
    webPreferences: { devTools: false }
  })
  win.once('ready-to-show', () => { win.show() })
  win.removeMenu()
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })

app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow() })
