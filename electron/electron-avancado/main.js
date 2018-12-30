const { BrowserWindow, app, Tray, Menu, globalShortcut } = require('electron');
const url  = require('url');
const path = require('path');
const http = require('http');
require('dotenv').config();

app.setAppUserModelId('app-electron');

if (process.env.NODE_ENV == 'development') {
    require('electron-reload')(__dirname);
}


function createWindow()
{
    let window = new BrowserWindow({ width: 800, height: 600});

    let file = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file',
        slashes: true
    });

    window.loadURL(file);

    if (process.env.NODE_ENV == 'development') {
        window.webContents.openDevTools();
    }

    window.on('minimize', () => console.log('minimizado'));
    window.on('maximize', () => console.log('maximizado'));
    window.on('unmaximize', () => console.log('unmaximize'));
    window.on('restore', () => console.log('restaurado'));
    window.on('resize', () => console.log('redimensionado'));
    window.on('close', () => console.log('closed'));

    // http.get({
    //     hostname: 'api.giphy.com',
    //     port: 80,
    //     path: `/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}`
    // }, (res) => {
    //     let output;
    //     res.on('data', (chunk) => {
    //         output += chunk;
    //     })
    //     res.on('end', () => {
    //         let response = output.replace('undefined','');
    //         response = JSON.parse(response);
    //         console.log(response.data.image_url);
    //     });
    // });

    const menu = Menu.buildFromTemplate([
        {
            label: 'Mostrar aplicativo', 
            click: function() {
                window.show();
            }
        },
        {
            label: 'Sair',
            click: function() {
                app.isQuitting = true;
                app.quit();
            }
        }
    ]);

    let tray = new Tray(path.join(__dirname,'tray.png'));

    tray.setContextMenu(menu);

    tray.on('click', () => {
        window.isVisible() ? window.hide() : window.show();
    })

    window.on('minimize', (e) => {
        e.preventDefault();
        window.hide();
    });
    window.on('close', (e) => {
        if (!app.isQuitting) {
            e.preventDefault();
            window.hide();
        }
    });

    window.on('show', (e) => {
        tray.setHighlightMode('always');
    })

    //globalShortcut.register('CommandOrControl + a + s', () => console.log('you r crazy!!'));
}

app.on('ready', () => {
    createWindow();
});

///build project
///npm install
///npm run build
//"build": "cross-env NODE_ENV=production electron-builder -p always",
//"build:dir": "cross-env NODE_ENV=production electron-builder --dir",