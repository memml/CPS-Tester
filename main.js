const {app, BrowserWindow, Menu} = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 450,
        height: 550,
        icon: 'assets/icons/icon.ico',
        resizable: false
    });

    Menu.setApplicationMenu(null);
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    app.quit()
})