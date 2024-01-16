class ProcessorFiles {
  static process(data) {
    const separeData = data.split('\r');
    const rows = [];
    // console.log(separeData)
    separeData.forEach(element => {
      rows.push(element.split(';'))
    });

    return rows;
  }
}

module.exports = ProcessorFiles;