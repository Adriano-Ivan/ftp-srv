const FtpSrv = require('ftp-srv');


const ftpServer = new FtpSrv(
{ anonymous: true, greeting : [ "Hello ", "Wie gehts?" ] })


ftpServer.on('login',(data,resolve,reject)=>{
   console.log('EITA')

    resolve ( { root: './ftp_files' } );
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