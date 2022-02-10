const FtpSrv = require('ftp-srv');

const hostname='172.18.0.1';
const port = '8097';

const ftpServer = new FtpSrv('ftp://'+hostname+":"+port,
{ anonymous: true, greeting : [ "Hello Jong", "Wie gehts?" ] });

ftpServer.on('login',(data,resolve,reject)=>{
    // console.log(`data: ${data}`);
    // console.log(`resolve ${resolve}`);
    // console.log(`reject:${reject}`);
    resolve ( { root: '/home/adri20/ftpfiles' } );
});

ftpServer.on('client-error',(connection,context,error)=>{
    console.log('erro');
    console.log ( 'connection: ' +  connection );
    console.log ( 'context: '    +  context );
    console.log ( 'error: '      +  error );
});

ftpServer.listen().then(()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});