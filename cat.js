const fs = require('fs')

function cat (){
  fs.readFile('bash.js', 'utf8', (err, files) => {
      if (err) {
          throw err
      } else {
          process.stdout.write(files)
          process.stdout.write("prompt > ");
      }
  })
}
module.exports = {
    cat,
}