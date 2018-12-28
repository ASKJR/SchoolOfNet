const {BrowserWindow, app, dialog, Menu, MenuItem} = require('electron');
const url      = require('url');
const path     = require('path');



let window;

app.on('ready', () => {
    
    let showExitWindow = true;

    window = new BrowserWindow({
        width: 500,
        height: 400
    });

    window.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file:'
    }));

    window.on('close', (e) => {
        if (showExitWindow) {
            e.preventDefault();
            dialog.showMessageBox({
                type: 'question',
                title: 'Confirm',
                message: 'Do you really want to close?',
                buttons: ['Yes', 'No'],
            }, (response) => {
                if (response === 0) {
                    showExitWindow = false;
                    window.close();
                }
            });
        }
    });


    // window.webContents.openDevTools();
    // window.on('closed', () => {
    //     console.log('window closed event triggered.');
    // });

    // dialog.showMessageBox(window, {
    //     type: 'info',
    //     title: 'My 1st message box',
    //     message: 'Electron is so cool.',
    //     buttons: []
    // });

    // dialog.showOpenDialog(window, {
    //     title: 'Open a file with electron...',
    //     // buttonLabel: 'My Label'

    // });

    // dialog.showSaveDialog(window, {
    //     title: 'Save with Electron...'
    // });

    // dialog.showErrorBox('deadlockError','danger. be careful');

    // const myMenuTemplate = [
    //     {
    //         label: 'Menu 1'
    //     },
    //     {
    //         label: 'Menu 2',
    //         submenu: [
    //             {
    //                 label: 'Click me',
    //                 click() {
    //                     dialog.showMessageBox( window, {
    //                         type: 'warning',
    //                         message: 'clicked! :D',
    //                         buttons: []
    //                     });
    //                 }
    //             }
    //         ]
    //     }
    // ]

    // const menu = new Menu();
    // menu.append(new MenuItem({ label: 'Menu 1'}));
    // menu.append(new MenuItem(
    //     {
    //         label: 'Menu 2',
    //         submenu: [{
    //             label: 'Click me',
    //             click() {
    //                 dialog.showMessageBox( window, {
    //                     type: 'warning',
    //                     message: 'clicked! :D',
    //                     buttons: []
    //                 });
    //             }
    //         }]
    //     }
    // ));
    // const menu = Menu.buildFromTemplate(myMenuTemplate);
    // Menu.setApplicationMenu(menu);



});

// app.on('before-quit', () => {
//     console.log('before-quit event triggered');
// });