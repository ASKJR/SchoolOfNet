const { remote } = require('electron');
const currentWindow = remote.BrowserWindow.getFocusedWindow();
const path = require('path');
const MouseTrap = require('mousetrap');

const minimizar = document.getElementById('minimizar');
minimizar.addEventListener('click', (e) => {
    e.preventDefault();
    currentWindow.minimize();
});

const maximinizar = document.getElementById('maximinizar');
maximinizar.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize();
        maximinizar.textContent = 'Maximinizar'
    } else {
        maximinizar.textContent = 'Restaurar'
        currentWindow.maximize();
    }
});

const fechar = document.getElementById('fechar');
fechar.addEventListener('click', (e) => {
    e.preventDefault();
    currentWindow.close();
});

const fullScreen = document.getElementById('fullscreen');
fullScreen.addEventListener('click', (e) => {
    e.preventDefault();
    currentWindow.setFullScreen(!currentWindow.isFullScreen());
});

const getGif = document.getElementById('getGif');
getGif.addEventListener('click', (e) => {
    e.preventDefault();
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {

        if (httpRequest.status == 200) {
            let response = JSON.parse(httpRequest.response);
            let imgUrl = response.data.image_url;
            document.getElementById('gifOutput').innerHTML = `<img src="${imgUrl}">`;
        }
    }
    httpRequest.open('GET','http://api.giphy.com/v1/gifs/random?api_key=' + process.env.GIPHY_API_KEY);
    httpRequest.send();
});

const notification = document.getElementById('notification');
notification.addEventListener('click', (e) => {
    e.preventDefault();
    let notification = new Notification('My notification title',{
        body: 'My body',
        icon: path.join(__dirname, 'tray.png')
    });

    notification.onclick = (e) => {
        alert('clicked ');
    }
});

// MouseTrap.bind('up up up left left', (e) => {
//     alert("Kato's win");
// });

//"build": "cross-env NODE_ENV=production electron-builder -p always",
//"build:dir": "cross-env NODE_ENV=production electron-builder --dir",