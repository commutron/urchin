export function downLoad(filenameState, loadState) {
  const loadConstruct = loadState?.join("\n");

  if( typeof document !== 'undefined' ) {
    let link = document.createElement("a");
    link.setAttribute('download', `${filenameState}_load-sheet.txt`);
    link.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(loadConstruct)}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }else{
    alert('document not found');
  }
}

export function printLoad(filenameState, loadState, printTextThing) {
  const tbSy = "width:100%; border-collapse:collapse";
  const clSy = "border:0; padding: 0.25ch 1ch; text-align: left;";
  const loadHTML =
    `<div>
      <table style="${tbSy}">
        <thead>
          <tr><th colspan="5" style="${clSy}">${filenameState}</th></tr>
          <tr style="font-size:14px">
            <th style="${clSy}">Fdr</th>
            <th style="${clSy}">Part</th>
            <th style="${clSy}">C</th>
            <th style="${clSy}">Qty</th>
            <th style="${clSy}">Symbols</th>
          </tr>
        </thead>
        <tbody style="vertical-align: baseline;line-height: 1.3;">
        ${loadState?.map( (line, index)=> {
          return `<tr style="font-size:14px">
            ${line?.map( (cell, ix)=> {
              return `<td style="${clSy}${ix != 4 ? 'white-space: nowrap':''}">${cell}</td>`;
            }).join('')
          }</tr>`;
        }).join('')}
        </tbody>
      </table>
    </div>`;
  
  // console.log(loadHTML);
  printTextThing(loadHTML);
}