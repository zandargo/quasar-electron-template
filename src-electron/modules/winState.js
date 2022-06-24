import { ipcMain, ipcRenderer, BrowserWindow  } from 'electron'


//* ---------------------- MAIN CONTEXT ---------------------- */
function init() {
  ipcMain.on('winState:start', (event, args) => {
    start(args)
  })

  const win = BrowserWindow.getFocusedWindow()

  //* Window events (not necessarily from buttons)
  win.on("move"      , () => win.webContents.send("winState", "normal"   ))
  win.on("minimize"  , () => win.webContents.send("winState", "minimized"))
  win.on("maximize"  , () => win.webContents.send("winState", "maximized"))
  win.on("unmaximize", () => win.webContents.send("winState", "normal"   ))
  win.on("restore"   , () => win.webContents.send("winState", "normal"   ))

  //* Window events received from the frontend
  ipcMain.on('winState', (event, state) => {
    switch (state) {
      case 'minimize':
        win.minimize()
        break;
      case 'maximize':
        win.maximize()
        break;
      case 'restore':
        win.unmaximize()
        break;
      case 'close':
        win.close()
        win.destroy()
        break;

      default:
        win.unmaximize()
        break;
    }
  })

}

//* --------------------- PRELOAD CONTEXT -------------------- */
function start (args) {
  if (!BrowserWindow) {
    ipcRenderer.send('winState:start', args)
    return
  }

  const win = BrowserWindow.getFocusedWindow()

  //> Do stuff with current window

}

//* ------------------------- EXPORTS ------------------------ */

const api = { start }

export default { init, api }
