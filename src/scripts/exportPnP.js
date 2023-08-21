export function downPnP(filenameState, placeState) {
  const pnpConstruct = placeState?.join("\n");

  if( typeof document !== 'undefined' ) {
    let link = document.createElement("a");
    link.setAttribute('download', `${filenameState}_pick-place.csv`);
    link.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(pnpConstruct)}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }else{
    alert('document not found');
  }
}

export function printPnP(filenameState, placeState, printTextThing) {
  const tbSy = "width:75%; border-collapse:collapse";
  const clSy = "border: 1px solid black; text-align: right;";
  const pnpHTML =
    `<div>
      <h2>${filenameState}</h2>
      <table style="${tbSy}">
        ${placeState?.map( (line, index)=> {
          return `<tr>
          <td>${index+1}</td>
            ${line?.map( (cell)=> {
              return `<td style="${clSy}"><big>${cell}</big></td>`;
            }).join('')
          }</tr>`;
        }).join('')}
      </table>
    </div>`;
  
  printTextThing(pnpHTML);
}