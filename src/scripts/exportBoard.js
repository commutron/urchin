export function downBoard(filenameState, boardState) {
  const bd = boardState;
  const boardConstruct = `${filenameState}\n\n${bd?.topTitle}\n\n${bd?.subTitle}\n\nBoard\nX\t${bd?.bX}\nY\t${bd?.bY}\nT\t${bd?.bT}\n\nOrgin Offsets\nX\t${bd?.orginX}\nY\t${bd?.orginY}\n\nFiducial Mark Size\nFid1\t${bd?.fMark1}\nFid2\t${bd?.fMark2}\n\nPanel Offsets\n${bd.oDataPlain ? bd.oDataPlain.map( (line, index)=> {
    return `${index+1}\t${line?.map( (cell)=> ( `${cell}\t` ) ).join('')}\n`}).join('')
  : `undefined\n`}\nBad Mark\n${bd?.lBadX ? `Global\t${bd?.gBadX}\t${bd?.gBadY}\nLocal\t${bd?.lBadX}\t${bd?.lBadY}\n` 
  : `undefined\n`}`;

  if( typeof document !== 'undefined' ) {
    let link = document.createElement("a");
    link.setAttribute('download', `${filenameState}_board.txt`);
    link.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(boardConstruct)}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }else{
    alert('document not found');
  }
}

export function printBoard(filenameState, boardState, printTextThing) {
  const tbSy = "width:50%; border-collapse:collapse";
  const hclSy = "border: 1px solid black; text-align: left;";
  const clSy = "border: 1px solid black; text-align: right;";
  const bd = boardState;
  const brdHTML =
    `<div>
      <h2>${filenameState}</h2>
      <h3>${bd?.topTitle}</h3>
      <h3>${bd?.subTitle}</h3>
      <table style="${tbSy}">
        <tr><th colspan="2" style="${hclSy}">Board</th><tr>
        <tr><td style="${clSy}">X</td><td style="${clSy}"><big>${bd?.bX}</big></td></tr>
        <tr><td style="${clSy}">Y</td><td style="${clSy}"><big>${bd?.bY}</big></td></tr>
        <tr><td style="${clSy}">T</td><td style="${clSy}"><big>${bd?.bT}</big></td></tr>
        <tr><th colspan="2" style="${hclSy}">Orgin Offsets</th><tr>
        <tr><td style="${clSy}">X</td><td style="${clSy}"><big>${bd?.orginX}</big></td></tr>
        <tr><td style="${clSy}">Y</td><td style="${clSy}"><big>${bd?.orginY}</big></td></tr>
        <tr><th colspan="2" style="${hclSy}">Fiducial Mark Size</th><tr>
        <tr><td style="${clSy}">Fid1</td><td style="${clSy}"><big>${bd?.fMark1}</big></td></tr>
        <tr><td style="${clSy}">Fid2</td><td style="${clSy}"><big>${bd?.fMark2}</big></td></tr>
        <tr><td style="${clSy}">Fid3</td><td style="${clSy}"><big>${bd?.fMark3}</big></td></tr>
      </table>
      <br />
      <table style="${tbSy}">
        <tr><th colspan="5" style="${hclSy}">Panel Offsets</th><tr>
        ${bd.oDataPlain ? bd.oDataPlain.map(function (line, index) {
          return `<tr>
          <td>${index+1}</td>
            ${line?.map(function (cell) {
              return `<td style="${clSy}"><big>${cell}</big></td>`;
            }).join('')
          }</tr>`;
        }).join('')
        : `<tr><td colspan='5'>no offsets</td></tr>`}
      </table>
      <br />
      <table style="${tbSy}">
        <tr><th colspan="3" style="${hclSy}">Bad Mark</th></tr>
        ${bd?.lBadX ? `<tr>
          <td style="${clSy}">Global</td>
          <td style="${clSy}"><big>${bd?.gBadX}</big></td>
          <td style="${clSy}"><big>${bd?.gBadY}</big></td>
        </tr>
        <tr>
          <td style="${clSy}">Local</td>
          <td style="${clSy}"><big>${bd?.lBadX}</big></td>
          <td style="${clSy}"><big>${bd?.lBadY}</big></td>
        </tr>`
        : "<tr><td colspan='3'>no bad mark</td></tr>"}
      </table>
    </div>`;
  
  printTextThing(brdHTML);
}