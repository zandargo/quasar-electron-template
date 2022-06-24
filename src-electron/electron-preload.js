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
import winState from 'src-electron/modules/winState'


const validChannels = ["winState"]

contextBridge.exposeInMainWorld("ipc", {
	send: (channel, data) => {
		if (validChannels.includes(channel)) {
			ipcRenderer.send(channel, data)
		}
	},
	on: (channel, func) => {
		if (validChannels.includes(channel)) {
			// Strip event as it includes `sender` and is a security risk
			ipcRenderer.on(channel, (...args) => func(...args))
		}
	},
})

contextBridge.exposeInMainWorld('api',
  {
    envMode: process.env.MODE,
    winState: { ...winState.api },
  }
)

//  contextBridge.exposeInMainWorld("ipc", {
//    send: (channel, data) => {
//      if (validChannels.includes(channel)) {
//        ipcRenderer.send(channel, data);
//      }
//    },
//    on: (channel, func) => {
//      if (validChannels.includes(channel)) {
//        // Strip event as it includes `sender` and is a security risk
//        ipcRenderer.on(channel, (...args) => func(...args));
//      }
//    },
//  })

//  contextBridge.exposeInMainWorld("csxAPI", {
// 	envMode: process.env.MODE,
// 	minimize() {
// 		window.getFocusedWindow().minimize()
// 	},
// 	maximize() {
// 		window.getFocusedWindow().maximize()
// 	},
// 	restore() {
// 		window.getFocusedWindow().unmaximize()
// 	},
// 	close() {
// 		window.getFocusedWindow().close()
// 		window.getFocusedWindow().destroy()
// 	},
// })
