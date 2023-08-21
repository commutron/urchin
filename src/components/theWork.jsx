import React, { useState, useEffect, Fragment } from 'react'
// import lodash from 'lodash';

import dataInputExtractHitachi from '../scripts/dataInputExtractHitachi';
import dataInputExtractYamaha from '../scripts/dataInputExtractYamaha';
import { downPnP, printPnP } from '../scripts/exportPnP';
import { downBoard, printBoard } from '../scripts/exportBoard';
import { downLoad, printLoad } from '../scripts/exportLoad';
import { downParts, printParts } from '../scripts/exportParts';
import { downSigma } from '../scripts/exportSigma';
import { downAdvantis } from '../scripts/exportAdvantis';
import { BackButton, DownloadButton, PrintButton } from './theButtons';

const TheWork = ()=> {

  const [ workState, workSet ] = useState(false);

  const [ filenameState, filenameSet ] = useState(false);
  const [ boardState, boardSet ] = useState(undefined);
  const [ placeState, placeSet ] = useState(undefined);
  const [ loadState, loadSet ] = useState(undefined);
  const [ partsState, partsSet ] = useState(undefined);

  const [ advBulkState, advBulkSet ] = useState(undefined);
  const [ yamBulkState, yamBulkSet ] = useState(undefined);

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

  const setValues = (data)=> {
    
    data.file && filenameSet(data.file);
        
    data.board && boardSet(data.board);
    
    data.place && placeSet(data.place);
    
    data.load && loadSet(data.load);

    data.parts && partsSet(data.parts);

    data.yamaha && yamBulkSet(data.yamaha);
  
    data.advantis && advBulkSet(data.advantis);

    data.error && errorSet(data.error);

  };

  const runFileThing = (file)=> {
    if(file) {
      workSet(true);
      setTimeout(() => {
        var fr = new FileReader();
        // fr.load = function(e) { // or loadend (api changed?)
        fr.onload = function(e) {
          const rawText = fr.result;
          if(rawText) {
            if(typeof rawText.split(/\n/g)[2] == 'string') {
              
              if( rawText.includes(':CORE') ) {

                dataInputExtractHitachi(
                  rawText,
                  (dt)=>setValues(dt)
                );

              }else if( rawText.includes(':L-COMMON') ) {
                
                dataInputExtractYamaha(
                  rawText,
                  (dt)=>setValues(dt)
                );
              }else{
                errorSet("Invalid");
              }
            }else{
              errorSet("Invalid");
            }  
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
    loadSet(undefined);
    partsSet(undefined);
    yamBulkSet(undefined);
    advBulkSet(undefined);
    errorSet(undefined);
  }

  const printTextThing = (htmlString)=> {
    if( htmlString && typeof document !== 'undefined' ) {
    
      let printableElement = document.createElement('iframe');
      printableElement.setAttribute('id', "printFrame");
      printableElement.setAttribute('style', "display: none");

      document.body.appendChild(printableElement);

      let printframe = document.getElementById("printFrame");
      let printArea = printframe.contentWindow.document.getElementsByTagName("HTML")[0];

      printArea.innerHTML = htmlString;
      
      printframe.contentWindow.focus();
      printframe.contentWindow.print();
      
      // cleanup (browser compat)
      setTimeout(()=> printableElement.remove(),10);
    }else{
      alert('document not found');
    }
  }
  
  errorState && console.error(errorState);
  
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
              <PrintButton 
                pID='doBoardPrint'
                printFunc={(e)=>printBoard(filenameState, boardState, printTextThing)} />
              <DownloadButton 
                bID='doBoardDown'
                downFunc={(e)=>downBoard(filenameState, boardState)} />
            </span>
          </div>

          <div className='outputLine'>
            <b>Pick<wbr />'n'<wbr/>Place</b>
            <span>
              <PrintButton 
                pID='doPnpPrint'
                printFunc={(e)=>printPnP(filenameState, placeState, printTextThing)} />
              <DownloadButton
                bID='doPnpDown'
                downFunc={(e)=>downPnP(filenameState, placeState)} />
            </span>
          </div>

          <div className='outputLine'>
            <b>Parts List</b>
            <span>
              <PrintButton 
                pID='doPartsPrint'
                printFunc={(e)=>printParts(filenameState, partsState, printTextThing)} />
              <DownloadButton 
                bID='doPartsDown'
                downFunc={(e)=>downParts(filenameState, partsState)} />
            </span>
          </div>
          
          {loadState &&
            <div className='outputLine' key="yamahasigmaload">
              <b>Load Sheet</b>
              <span>
                <PrintButton 
                  pID='doLoadPrint'
                  printFunc={(e)=>printLoad(filenameState, loadState, printTextThing)} />
                <DownloadButton 
                  bID='doLoadDown'
                  downFunc={(e)=>downLoad(filenameState, loadState)} />
              </span>
            </div>
          }
          
          {yamBulkState &&
            <div className='outputLine'>
              <b>Sigma .psa</b>
              <span>
                <DownloadButton 
                  bID={filenameState + 'doSigmaDown'}
                  downFunc={(e)=>downSigma(filenameState, yamBulkState)} />
              </span>
            </div>
          }
          {advBulkState &&
            <div className='outputLine'>
              <b>Advantis .ci2</b>
              <span>
                <DownloadButton 
                  bID={filenameState + 'doAdvantisDown'}
                  downFunc={(e)=>downAdvantis(filenameState, advBulkState)} />
              </span>
            </div>
          }

          <BackButton clearFileThing={clearFileThing} />
        </div>
      :
        <div className='centre dropZone' id='drop-area' title="Open .PGA or .PSA File">
          
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
              accept='.PGA, .PSA'
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