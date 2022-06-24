import { app, BrowserWindow, nativeTheme } from 'electron'
import path from 'path'
import os from 'os'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

try {
  if (platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(path.join(app.getPath('userData'), 'DevTools Extensions'))
  }
} catch (_) { }

let mainWindow

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    // icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    icon: `${__dirname}/icons/icon.ico`,
    width: 1000,
    height: 600,
    frame: false,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }


  //* --------------------- WINDOW CONTROL --------------------- */
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.on("move", () => {
		mainWindow.webContents.send("winState", "normal")
	})
	mainWindow.on("minimize", () => {
		mainWindow.webContents.send("winState", "minimized")
	})
	mainWindow.on("maximize", () => {
		mainWindow.webContents.send("winState", "maximized")
	})
	mainWindow.on("unmaximize", () => {
		mainWindow.webContents.send("winState", "normal")
	})
	mainWindow.on("restore", () => {
		mainWindow.webContents.send("winState", "normal")
	})



}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
