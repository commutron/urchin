import React, { useState, useEffect, Fragment } from 'react'
// import lodash from 'lodash';

import dataInputExtract from '../scripts/dataInputExtract';
import { BackButton, DownloadButton, PrintButton } from './theButtons';

const TheWork = ()=> {

  const [ workState, workSet ] = useState(false);

  const [ filenameState, filenameSet ] = useState(false);
  const [ boardState, boardSet ] = useState(undefined);
  const [ placeState, placeSet ] = useState(undefined);
  const [ partsState, partsSet ] = useState(undefined);

  const [ errorState, errorSet ] = useState(null);

  useEffect( ()=> {
    let dropArea = null;
    if( typeof document !== 'undefined' ) {
      dropArea = document.getElementById('drop-area');

      dropArea.addEventListener('dragover', (event) => {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
      });

      dropArea.addEventListener('drop', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        runFileThing(file);
      });
    }

    return ()=> dropArea && dropArea.removeEventListener;
  },[]);

  const runFileThing = (file)=> {
    if(file) {
      workSet(true);
      setTimeout(() => {
        var fr = new FileReader();
        fr.onload = function(e) {
          const rawText = fr.result;
            if(rawText) {
            dataInputExtract(
              rawText,
              (fn)=>filenameSet(fn),
              (bd)=>boardSet(bd),
              (pl)=>placeSet(pl),
              (pn)=>partsSet(pn),
              (er)=>errorSet(er)
            );
          }
        };
        fr.readAsText(file);
        workSet(false);
      }, 1000);
    }
  }

  const getFileThing = (e)=> {
    const file = e.target.files[0];
    runFileThing(file);
  }

  const clearFileThing = ()=> {
    filenameSet(false);
    boardSet(undefined);
    placeSet(undefined);
    partsSet(undefined);
    errorSet(undefined);
  }

  const printTextThing = (htmlString)=> {
    if( htmlString && typeof document !== 'undefined' ) {
    
      let printableElement = document.createElement('iframe');
      printableElement.setAttribute('id', "printFrame");

      document.body.appendChild(printableElement);

      let printframe = document.getElementById("printFrame");
      let printArea = printframe.contentWindow.document.getElementsByTagName("HTML")[0];

      printArea.innerHTML = htmlString;

      printframe.contentWindow.focus();
      printframe.contentWindow.print();

      printableElement.remove();
    }else{
      alert('document not found');
    }
  }

  function downBoard() {
    const bd = boardState;
    const boardConstruct = `${filenameState}\n\n${bd?.topTitle}\n\n${bd?.subTitle}\n\nBoard\nX\t${bd?.bX}\nY\t${bd?.bY}\nT\t${bd?.bT}\n\nOrgin Offsets\nX\t${bd?.orginX}\nY\t${bd?.orginY}\n\nFiducial Mark Size\nFid1\t${bd?.fMark1}\nFid2\t${bd?.fMark2}\n\nPanel Offsets\n${bd.oDataMap ? bd.oDataMap.map( (line, index)=> {
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

  function printBoard() {
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
          <tr><th colspan="2" style="${hclSy}">Board</th></th><tr>
          <tr><td style="${clSy}">X</td><td style="${clSy}"><big>${bd?.bX}</big></td></tr>
          <tr><td style="${clSy}">Y</td><td style="${clSy}"><big>${bd?.bY}</big></td></tr>
          <tr><td style="${clSy}">T</td><td style="${clSy}"><big>${bd?.bT}</big></td></tr>
          <tr><th colspan="2" style="${hclSy}">Orgin Offsets</th></th><tr>
          <tr><td style="${clSy}">X</td><td style="${clSy}"><big>${bd?.orginX}</big></td></tr>
          <tr><td style="${clSy}">Y</td><td style="${clSy}"><big>${bd?.orginY}</big></td></tr>
          <tr><th colspan="2" style="${hclSy}">Fiducial Mark Size</th></th><tr>
          <tr><td style="${clSy}">Fid1</td><td style="${clSy}"><big>${bd?.fMark1}</big></td></tr>
          <tr><td style="${clSy}">Fid2</td><td style="${clSy}"><big>${bd?.fMark2}</big></td></tr>
        </table>
        <br />
        <table style="${tbSy}">
          <tr><th colspan="4" style="${hclSy}">Panel Offsets</th></th><tr>
          ${bd.oDataMap ? bd.oDataMap.map(function (line, index) {
            return `<tr>
            <td>${index+1}</td>
              ${line?.map(function (cell) {
                return `<td style="${clSy}"><big>${cell}</big></td>`;
              }).join('')
            }</tr>`;
          }).join('')
          : `<tr><td colspan='4'>undefined</td></tr>`}
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
          : "<tr><td colspan='3'>undefined</td></tr>"}
        </table>
      </div>`;
    
    printTextThing(brdHTML);
  }

  function downPnP() {
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

  function printPnP() {
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

  function downParts() {
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

  function printParts() {
    const pnpHTML =
      `<div>
        <h2>${filenameState}</h2>
        ${partsState.map( (line)=> ( 
          `<p>${line}</p>` ) 
        ).join('')}
      </div>`;
    
    printTextThing(pnpHTML);
  }

  return(
    <Fragment>
      {errorState ?
        <div className='centre errorZone'>
          <div className='erroriconWrap'>
            <svg 
              className='erroricon'
              xmlns="http://www.w3.org/2000/svg" 
              width="100%" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"/>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z"/>
              <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z"/>
          </svg></div>
          <h2>INVALID FILE</h2>
          <BackButton clearFileThing={clearFileThing} />
        </div>
      : filenameState ?
        <div className='outputZone'>
          <p>{filenameState}</p>

          <div className='outputLine'>
            <b>Board</b>
            <span>
              <DownloadButton 
                bID='doBoardDown'
                downFunc={(e)=>downBoard(e)} />
              <PrintButton 
                pID='doBoardPrint'
                printFunc={(e)=>printBoard(e)} />
            </span>
          </div>

          <div className='outputLine'>
            <b>Pick<wbr />'n'<wbr/>Place</b>
            <span>
              <DownloadButton
                bID='doPnpDown'
                downFunc={(e)=>downPnP(e)} />
              <PrintButton 
                pID='doPnpPrint'
                printFunc={(e)=>printPnP(e)} />
            </span>
          </div>

          <div className='outputLine'>
            <b>Parts List</b>
            <span>
              <DownloadButton 
                bID='doPartsDown'
                downFunc={(e)=>downParts(e)} />
              <PrintButton 
                pID='doPartsPrint'
                printFunc={(e)=>printParts(e)} />
            </span>
          </div>

          <BackButton clearFileThing={clearFileThing} />
        </div>
      :
        <div className='centre dropZone' id='drop-area' title="Open .PGA File">
          
          <label 
            htmlFor='fileClickInput'
            id="fileClickLabel"
            aria-label="Upload File"
            className={`dropiconWrap ${workState ? 'work' : ''}`}>
            <svg 
              className={`dropicon ${workState ? 'work' : ''}`}
              xmlns="http://www.w3.org/2000/svg" 
              width="75%" viewBox="0 0 32 32">
                <path d="M 6 3 L 6 29 L 26 29 L 26 9.59375 L 25.71875 9.28125 L 19.71875 3.28125 L 19.40625 3 Z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 Z M 20 6.4375 L 22.5625 9 L 20 9 Z"/>
            </svg>

            <input
              type='file'
              accept='.PGA'
              multiple={false}
              onInput={(e)=>getFileThing(e)}
              id='fileClickInput'
              className='fileInput'
              disabled={workState}
              tabIndex="1"
            /> 
          </label>        

        </div>
      }
    </Fragment>
  );
};

export default TheWork;