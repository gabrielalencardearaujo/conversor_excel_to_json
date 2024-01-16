const pdfWriter = require('html-pdf');

class PDFWriter {
  static WritePDF(filename, html) {
    pdfWriter.create(html, { format: 'Letter' }).toFile(filename, (err, res) => { 
      if(err) console.log('Ocorreu um erro', err)
      console.log(res)
    })
  }
}

module.exports = PDFWriter;