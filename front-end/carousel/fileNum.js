function createWindow () { 
    let win = new BrowserWindow({ 
        width: 800, height: 600, 
        webPreferences: { 
            nodeIntegration: true, 
            contextIsolation: false, //enableRemoteModule: true, 
        } }); //개발자 모드 (F12) 
        win.webContents.openDevTools(); 
        win.loadFile('index.html'); 
    }




function angryNum(){
    const fs = require('fs');
    const dir = '../angry';

    fs.readdir(dir, (err, files) => {
        console.log(files.length);
        document.write(files.length);
    });
}

function happyNum(){
    const fs = require('fs');
    const dir = '../happy';
    var count = 0

    fs.readdir(dir, (err, files) => {
        console.log(files.length);
        document.write(files.length);
    });
}

function neutralNum(){
    const fs = require('fs');
    const dir = '../neutral';

    fs.readdir(dir, (err, files) => {
        console.log(files.length);
        document.write(files.length);
    });
}