const {pwd} = require('./pwd')
const {ls} = require('./ls') 
const {cat} =  require('./cat')
process.stdout.write('prompt >');


process.stdout.on('data', (data) => {
     const cmd = data.toString().trim();

 if (cmd === 'pwd'){
     pwd();
     
 } else if(cmd === 'ls') {
     ls();
 } else if (cmd === 'cat') {
     cat();
 }
 process.stdout.write('you typed: ' + cmd);
 process.stdout.write('/nprompt > ')
});


