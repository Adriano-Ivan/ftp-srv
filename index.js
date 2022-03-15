const FtpSrv = require('ftp-srv');


const ftpServer = new FtpSrv(
{ anonymous: false, greeting : [ "Hello ", "Wie gehts?" ] })

// const ftpServer = new FtpSrv({
//     url: "ftp://0.0.0.0:" + port,
//     anonymous: true
// });

ftpServer.on('login',({connection, username,password},resolve,reject)=>{
    console.log('CAPTURA.')
    
    if(username ==='admin' && password==='1234'){
        resolve ( { root: './ftp_files' } );
    }else {
        reject(new Error('Unable to connect'));
    }
    
});

ftpServer.on('client-error',(connection,context,error)=>{
    console.log('erro');
    console.log ( 'connection: ' +  connection );
    console.log ( 'context: '    +  context );
    console.log ( 'error: '      +  error );
});

ftpServer.listen().then(()=>{
    console.log(`Server running `);
}).catch(erro=>console.log(erro));