export function downParts(filenameState, partsState) {
  const partsConstruct = partsState.join("\n");

  if( typeof document !== 'undefined' ) {
    let link = document.createElement("a");
    link.setAttribute('download', `${filenameState}_parts-list.txt`);
    link.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(partsConstruct)}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }else{
    alert('document not found');
  }
}

export function printParts(filenameState, partsState, printTextThing) {
  const tbSy = "width:100%; border-collapse:collapse";
  const clSy = "border:0; padding: 0.5ch 0; text-align: left;";
  const partsHTML =
    `<div>
      <table style="${tbSy}">
        <thead>
          <tr><th colspan="6" style="${clSy}"><big>${filenameState}</big></th></tr>
        </thead>
        <tbody style="vertical-align: baseline;line-height: 1.3;">
        <tr><td style="display: grid; grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );">
        ${(partsState || []).map( (line)=> ( 
          `<p>${line}</p>` ) 
        ).join('')}
        </td></tr>
        </tbody>
      </table>
    </div>`;
  // console.log(partsHTML);
  printTextThing(partsHTML);
}