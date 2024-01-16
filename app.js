const Reader = require('./src/Reader.js');
const Writer = require('./src/Writer.js');
const ProcessorFiles = require('./src/ProcessorFiles.js');
const Table = require('./src/Table.js');
const HtmlParser = require('./src/HtmlParser.js');
// const PDFWriter = require('./src/PDFWriter.js');

const leitor = new Reader();
const escritor = new Writer();

async function getDados() {
  const dados = await leitor.read('./Public/Pendente_Geral.csv');
  const processedData = ProcessorFiles.process(dados);

  const table = new Table(processedData);
  const html = await HtmlParser.Parser(table);

  escritor.write('./Public/meuHTMLprocessado.html', html)
}

getDados()
