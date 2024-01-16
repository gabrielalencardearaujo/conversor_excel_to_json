const fs = require('fs');
const util = require('util');

class Writer {
  constructor(){
    this.writer = util.promisify(fs.writeFile)
  }

  async write(filename, data) {
    try {
      await this.writer(filename, data)
      return true
    }catch(err) { 
      console.error('Ocorreu um erro ao escrever no arquivo', err)
      return false
    }
  }
}

module.exports = Writer;