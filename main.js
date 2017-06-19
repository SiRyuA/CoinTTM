const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');

let AlwaysOn = false;

function createWindow () {
  let win = new BrowserWindow({
    title: 'TO THE MOON',
    width: 400,
    height: 600,
    minWidth: 400,
    minHeight: 600,
    icon: __dirname + '/img/icons.png',
    transparent: true,
    frame: false
  });
  win.setMenu(null)
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  //win.webContents.openDevTools()
  win.on('closed', () => { win = null });

  setInterval(function(){win.setAlwaysOnTop(AlwaysOn)}, 500)
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => { if (win === null) createWindow(); })

ipcMain.on('AlwaysOn', (event, arg) => {
  //console.log("AlwaysOn :", arg);
  AlwaysOn = arg;
})
