/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example (injects window.myAPI.doAThing() into renderer thread):
 *
 *   import { contextBridge } from 'electron'
 *
 *   contextBridge.exposeInMainWorld('myAPI', {
 *     doAThing: () => {}
 *   })
 */
 import { contextBridge, ipcRenderer } from "electron"
//_  import { BrowserWindow } from "@electron/remote"

 const validChannels = ["winState"]

 contextBridge.exposeInMainWorld("csxAPI", {
	envMode: process.env.MODE,
	minimize() {
		BrowserWindow.getFocusedWindow().minimize()
	},
	maximize() {
		BrowserWindow.getFocusedWindow().maximize()
	},
	restore() {
		BrowserWindow.getFocusedWindow().unmaximize()
	},
	close() {
		BrowserWindow.getFocusedWindow().close()
		BrowserWindow.getFocusedWindow().destroy()
	},
})
