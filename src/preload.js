// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const {ipcRenderer} = require('electron');
const closeApp = document.getElementById('exit');
closeApp.addEventListener('click', () => {
    ipcRenderer.send('close-me')
});