// import lodash from 'lodash';
const cleanMap = (arr)=> {
  let multidmn = []; 
  if(arr) {
    for(let line of arr) {
      if(line && line != '\r') { // maps start with ['\r'] and end with ['']
        multidmn.push(line.replace("\r", "").split(","));
      }
    }
  }
  return multidmn;
};

export default function dataInputExtract (
  rawText, sendUp
) {
  try {
    if(rawText && typeof rawText.split(/\n/g)[2] == 'string') {
      const fileName = rawText.split(',', 1)?.[0];
      const commonCut = rawText.split(':L-COMMON', 2)[1]?.split(':L-BOARD');
      const commonData = commonCut[0]?.trim()?.split(/\n/g);
      const topTitle = commonData[0]?.split(",")[0];
      const subTitle = commonData[0]?.split(",")[1];

      const boardCut = commonCut[1]?.split(':L-BBR', 2);
      const boardData = boardCut[0]?.trim()?.split(/\n/g);
      const boardSize = boardData[0]?.split(",");
      const bX = Number(boardSize[0]);
      const bY = Number(boardSize[1]);
      const bT = Number(boardSize[2]);
      const boardOrgin = boardData[1]?.split(",");
      const orginX = Number(boardOrgin[0]);
      const orginY = Number(boardOrgin[1]);
 
      // console.log({boardData, bX, bY, bT, orginX, orginY}); //GOOD

      const bbrCut = boardCut[1]?.split(':L-RECOG', 2);
      const gBadMark = bbrCut[0]?.trim()?.split(/\n/g);
      // const bbr1 = gBadMark[0]?.split(",");
      // bbr1[0] = mode (0,1-standard,2-optional)
      // bbr1[1] = sensor (0-photo_sensor, 1-camera)
      // bbr1[2] = color
      // bbr1[3] = size
      // ...camera settings
      // bbr1[-4] = image color (0-black, 1-white)
      // bbr1[last] = sequence (0-bad_mark[default], 1-recognition, 2-global_recognition)

      const bbr2 = gBadMark[1]?.split(",");
      // bbr2[0] = mode
      const gBadX = Number(bbr2[1]);
      const gBadY = Number(bbr2[2]);
      // const gBadColor = Number(bbr2[3]);
      // const gBadSize = Number(bbr2[4]);

      // console.log({bbrCut, gBadMark, bbrline2, gBadX, gBadY}); // GOOD
      /////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

      const recCut = bbrCut[1]?.split(':L-MARK', 2); 
      // console.log({recCut}); // GOOD

      const recog = recCut[0]?.trim()?.split(/\n/g);
      const setupFids = recog[0]?.split(",");
      // const recEnable = setupFids[0];
      const recImage = Number(setupFids[1]);
      // const recLocal = setupFids[2];

      const globalFid = recog[1]?.split(",");
      const useGlobal = Number(globalFid?.slice(0,1)) ? true : false;

      const gFidQty = Number(globalFid[0]);
      const gFid1x = globalFid[1];
      const gFid1y = globalFid[2];
      const gFid1m = globalFid[3];
      const gFid2x = globalFid[4];
      const gFid2y = globalFid[5];
      const gFid2m = globalFid[6];
      const gFid3x = globalFid[7];
      const gFid3y = globalFid[8];
      const gFid3m = globalFid[9];

      const markCut = recCut[1]?.split(':L-SETUP', 2);

      const fidMarks = markCut[0]?.trim();
      const fmarkArr = fidMarks?.split(/\n/g);
      const fmarkMap = cleanMap(fmarkArr);

      // console.log({globalFid, useGlobal, markCut, fidMarks, fmarkMap}); // GOOD

    // BarCodes :BC-COMMON -> :L-BC-PRM -> :L-BC-MARK -> :L-SWITCH

      const cmpntCut = markCut[1]?.split(':L-CMPNT', 2)[1]?.split(':FEEDER', 2);
      const cmpntData = cmpntCut[0]?.split(/\n/g); 
      const cmpntMap = cleanMap(cmpntData);
      // console.log({cmpntMap}); // GOOD

      const feederCut = cmpntCut[1]?.split(':TRAY', 2);
      const feederData = feederCut[0]?.split(/\n/g);
      const feederMap = cleanMap(feederData);
      // console.log({feederMap}); // GOOD
      // bank = [1]
      // slot = [3]
      // comp = [4]
      // skip = [7] (-,S,E)

      const placeCutA = feederCut[1]?.split(':P-DAT01', 2)[1];
      const hasOffset = placeCutA?.includes(":O-DAT01");
      const endplace = hasOffset ? ":O-DAT01" : ":SEQUENCE01";
      const placeCutZ = placeCutA?.split(endplace, 2);
      const placeData = placeCutZ[0]?.split(/\n/g); 
      const placeMap = cleanMap(placeData);
      // console.log({placeMap}); // GOOD

      const offsetCut = hasOffset ? placeCutZ[1]?.split(':SEQUENCE01', 2)[0] : "";
      const offsetData = offsetCut.split(/\n/g); 
      const offsetMap = cleanMap(offsetData);
      // console.log({offsetMap}); // GOOD

      const imageFid = placeMap[0];
      const iFid1x = imageFid[6];
      const iFid1y = imageFid[7];
      const iFid1m = imageFid[10];
      const iFid2x = imageFid[8];
      const iFid2y = imageFid[9];
      const iFid2m = imageFid[11];

      const bFid1x = useGlobal ? gFid1x : iFid1x;
      const bFid1y = useGlobal ? gFid1y : iFid1y;
      const bFid2x = useGlobal ? gFid2x : iFid2x;
      const bFid2y = useGlobal ? gFid2y : iFid2y;
      const bFid3x = useGlobal ? gFid3x : 0;
      const bFid3y = useGlobal ? gFid3y : 0;

      const findex1 = Number.parseInt( ( useGlobal ? gFid1m : iFid1m ), 10)-1; 
      const findex2 = Number.parseInt( ( useGlobal ? gFid2m : iFid2m ), 10)-1;
      const findex3 = Number.parseInt( ( useGlobal ? gFid3m : 1 ), 10)-1;
      const fMark1 = Number(fmarkMap[findex1]?.[1]);
      const fMark2 = Number(fmarkMap[findex2]?.[1]);
      const fMark3 = bFid3x || bFid3y ? Number(fmarkMap[findex3]?.[1]) : "-";

      // console.log({imageFid, bFid1x, bFid1y, fMark1, bFid2x, bFid2y, fMark2, bFid3x, bFid3y, fMark3}); // GOOD
      
      const localBad = placeMap[1];
      const hasBad = localBad?.[5] === "B";
      const lBadX = hasBad ? Number(localBad[0]) : undefined;
      const lBadY = hasBad ? Number(localBad[1]) : undefined;

      const PDAT01Array = hasBad ? placeMap?.slice(2,-1) : placeMap?.slice(1,-1);
      // console.log({hasBad, PDAT01Array});

      let pnpDataMap = PDAT01Array?.map( (pl)=> {
        const x = pl[0];
        const y = pl[1];
        const theta = pl[2];
        // height = [3]
        const comp = pl[4];
        const control = pl[5]; // (-,S,E,P)
        const symbol = pl[20];

        const partNum = cmpntMap.find( l => l[0] === comp )?.[1] || undefined;
      
        return [ symbol, Number(x), Number(y), Number(theta), partNum, control ];
      });
      pnpDataMap?.push(["fid1", Number(bFid1x), Number(bFid1y), 0, "FID", "-"]);
      pnpDataMap?.push(["fid2", Number(bFid2x), Number(bFid2y), 0, "FID", "-"]);
      Number(bFid3x) || Number(bFid3y) ? pnpDataMap?.push(["fid3", Number(bFid3x), Number(bFid3y), 0, "FID", "-"]) : null;

      // console.log({pnpDataMap}); // GOOD

      let loadDataMap = cmpntMap?.map( (cmp)=> {
        const partNum = cmp[1];

        const fdr = feederMap.find( f => f[4] === cmp[0] );
        const slot = !fdr ? "000" : fdr[1] + fdr[3].slice(1);
        const skip = !fdr ? "S" : fdr[7]; // (-,S,E)
        
        const plc = PDAT01Array.filter( l => l[4] === cmp[0] );
        const refs = plc.map( p => p[20] ).join(', ');

        return [ slot, partNum, skip, plc.length, refs ];
      }).sort((a,b)=>a>b?1:a<b?-1:0);
      // console.log({loadDataMap}); // GOOD

      const inUseParts = loadDataMap?.map( (e)=>{
        if(e[3] > 0) {
          return e[1];
        }
      }).filter(f=>f).sort();
      // console.log({inUseParts}); // GOOD

      const oDataClean = offsetMap?.slice(0,-1);
      const oDataPlain = oDataClean?.map( (ol)=> {
        // line = [0]
        const x = ol[1];
        const y = ol[2];
        const theta = ol[3];
        // height? = [4]
        const skip = ol[5];

        return [ Number(x), Number(y), Number(theta), skip ];
      });
      // console.log({oDataPlain}); // GOOD


      sendUp({
        file : fileName,
        
        board : { 
          topTitle, subTitle, 
          bX, bY, bT, orginX, orginY, 
          fMark1, fMark2, fMark3, oDataPlain,
          gBadX, gBadY,
          lBadX, lBadY
        },
        
        place : pnpDataMap,
      
        load : loadDataMap,
      
        parts : inUseParts,

        advantis : { 
          topTitle, subTitle, 
          bX, bY, bT, orginX, orginY,
          recImage, iFid1x, iFid1y, iFid2x, iFid2y,
          gFidQty, gFid1x, gFid1y, gFid2x, gFid2y, gFid3x, gFid3y,
          oDataPlain
        },

        error : null
    });
    }else{
      sendUp({ error : "Invalid" });
    }
  }catch(error) {
    sendUp({ error : error.message });
  }
}