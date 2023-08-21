// import lodash from 'lodash';
const asMap = (arr)=> {
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

export default function dataInputExtractHitachi (
  rawText, sendUp
) {
  try {
    if(rawText && typeof rawText.split(/\n/g)[2] == 'string') {
      const fileName = rawText.split(',', 1)?.[0];
      const coreCut = rawText.split(':CORE', 2)[1]?.split(':RECOG');
      const coreData = coreCut[0]?.trim()?.split(/\n/g);
      const topTitle = coreData[0]?.split(",")[0];
      const subTitle = coreData[0]?.split(",")[1];
      
      const boardSize = coreData[1]?.split(",");
      const bX = Number(boardSize[0]);
      const bY = Number(boardSize[1]);
      const bT = Number(boardSize[2]);
      const orginX = Number(boardSize[3]);
      const orginY = Number(boardSize[4]);
      const zDeg = Number(boardSize[5]);
      const pcbHt = Number(boardSize[6]);

      const gBadMark = coreData[2]?.split(",");
      const gBadModeLocal = gBadMark[0] // bad mark mode
      const gBadImgLocal = gBadMark[1] // image/color 0=black 1=white
      // gBadMark[2]
      const gBadModeOvrll = gBadMark[3] // overall pcb bbr mode
      const gBadX = Number(gBadMark[4]); // overall pcb bbr X
      const gBadY = Number(gBadMark[5]); // overall pcb bbr Y
      const gBadSqnc = gBadMark[6] // sequence 0=badmark 1= recog 2=global
      const gBadImgOvrll = gBadMark[18] // overall image/color 0=black 1=white
      
      const recCut = coreCut[1]?.split(':MARK', 2);

      const recog = recCut[0]?.trim()?.split(/\n/g);
      const setupFids = recog[0]?.split(",");
      const recEnable = setupFids[0]; // 1=enable
      const recPoints = setupFids[1]; // # of points
      const recImage = Number(setupFids[2]); // 1=enable

      const globalFid = recog[1]?.split(",");
      const useGlobal = Number(globalFid?.slice(0,1)) ? true : false;

      // const gFidQty = globalFid[0];
      const gFidQty = Number(recPoints);
      const gFid1x = globalFid[1];
      const gFid1y = globalFid[2];
      const gFid1m = globalFid[3];
      const gFid2x = globalFid[4];
      const gFid2y = globalFid[5];
      const gFid2m = globalFid[6];
      const gFid3x = globalFid[7];
      const gFid3y = globalFid[8];
      const gFid3m = globalFid[9];

      const markCut = recCut[1]?.split(':SETUP', 2);

      const fidMarks = markCut[0]?.trim();
      const fmarkArr = fidMarks?.split(/\n/g);
      const fmarkMap = asMap(fmarkArr);

      const fmarkRaw = fmarkMap.map( m => [m[1], m[2], m[4], m[5], m[6]])
    // BarCodes :BC-COMMON -> :BC-MARK -> :NOZ-PLC

      const OPEGcut = markCut[1]?.split(":OPE-G", 2)?.[1]?.split(":BC-COMMON", 2)?.[0];
      const OPEGmap = asMap(OPEGcut?.split(/\n/g));
      const preplcTp = OPEGmap[0]?.[0];
      const preplcBm = OPEGmap[0]?.[1];

      const f0Cut = markCut[1]?.split(':FDR-00', 2);
      const f1Cut = f0Cut[1]?.split(':FDR-01', 2);
      const f0Data = f1Cut[0]?.replace(',',"").trim();
      const f2Cut = f1Cut[1]?.split(':FDR-02', 2);
      const f1Data = f2Cut[0]?.replace(',',"").trim();
      const f3Cut = f2Cut[1]?.split(':FDR-03', 2);
      const f2Data = f3Cut[0]?.replace(',',"").trim();
      const f4Cut = f3Cut[1]?.split(':FDR-04', 2);
      const f3Data = f4Cut[0]?.replace(',',"").trim();
      const f5Cut = f4Cut[1]?.split(':FDR-05', 2);
      const f4Data = f5Cut[0]?.replace(',',"").trim();

      const feederSet = f0Data + `\n` + f1Data + `\n` + f2Data + `\n` + f3Data + `\n` + f4Data;
      const feederArr = feederSet?.split(/\n/g);
      const feederMap = asMap(feederArr);
      // slot, partNum, _, altNum, C, comment, fixed, altEnable 

      const uCut1 = f5Cut[1]?.split(':P-DAT01', 2)[1];
      const oExist = uCut1?.includes(":O-DAT01");
      const uCut2 = oExist ? uCut1?.split(':O-DAT01', 2) : uCut1?.split(':PP1', 1);
      const uData = uCut2[0]?.replace(',',"").trim();
      const uArr = uData?.split(/\n/g);
      const uMap = asMap(uArr);

      const imageFid = uMap[0];
      const iFidEnbl = imageFid[4];
      const iFid1x = imageFid[7];
      const iFid1y = imageFid[8];
      const iFid1m = imageFid[11];
      const iFid2x = imageFid[9];
      const iFid2y = imageFid[10];
      const iFid2m = imageFid[12];

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

      const localBad = uMap[1];
      const hasBad = localBad?.[6] === "B";
      const lBadX = hasBad ? Number(localBad[0]) : undefined;
      const lBadY = hasBad ? Number(localBad[1]) : undefined;

      const pDataArray = hasBad ? uMap?.slice(2,-1) : uMap?.slice(1,-1);

      let pDataMap = pDataArray?.map( (pl)=> {
        const symbol = pl[13];
        const partNum = feederMap.find( l => l[0] === pl[3] )?.[1] || undefined;

        return [ symbol, Number(pl[0]), Number(pl[1]), Number(pl[2]), partNum, pl[6] ];
      });
      const pDataPnP = pDataMap.slice();
      pDataPnP?.push(["Fid1", Number(bFid1x), Number(bFid1y), 0, "FID", "-"]);
      pDataPnP?.push(["Fid2", Number(bFid2x), Number(bFid2y), 0, "FID", "-"]);
      Number(bFid3x) || Number(bFid3y) ? pDataPnP?.push(["Fid3", Number(bFid3x), Number(bFid3y), 0, "FID", "-"]) : null;

      const inUseParts = feederMap?.map( (e)=>{
        const plMatch = pDataMap.find( p => p[4] === e[1] );
        if(plMatch) {
          return e[1];
        }
      }).filter(f=>f).sort();

      const oData = oExist ? uCut2[1]?.split(':PP1', 1)[0]?.replace(',',"").trim() : "";
      const oDataArray = oData?.split(/\n/g)?.slice(1,-1);
      const oDataPlain = oDataArray?.map( (ol)=> {
        const soL = ol.split(",");
        return [ Number(soL[0]), Number(soL[1]), Number(soL[2]), soL[5] ];
      });

      sendUp({
        file : fileName,
        
        board : { 
          topTitle, subTitle, 
          bX, bY, bT, orginX, orginY, 
          fMark1, fMark2, fMark3, oDataPlain,
          gBadX, gBadY, lBadX, lBadY
        },
        
        place : pDataPnP,
        
        parts : inUseParts,

        yamaha : { 
          topTitle, subTitle, 
          bX, bY, bT, orginX, orginY, zDeg, pcbHt, preplcTp, preplcBm,
          gBadX, gBadY,
          gBadModeLocal, gBadImgLocal, gBadModeOvrll, gBadSqnc, gBadImgOvrll,
  
          recEnable, recPoints, recImage,
          gFid1x, gFid1y, gFid1m, gFid2x, gFid2y, gFid2m, gFid3x, gFid3y, gFid3m,
          fmarkRaw, // [D1] [D2] [window] [image 0=bright] [level 0=high]
          inUseParts, 
          iFidEnbl, iFid1x, iFid1y, iFid1m, iFid2x, iFid2y, iFid2m,
          lBadX, lBadY,
          pDataMap, // [0=symbol] [1=x] [2=y] [3=theta] [4=partnum] [5=control]
          oDataPlain // [0=x] [1=y] [2=theta] [3=control]
          // multiple units?
        },
  
        advantis : { 
          topTitle, subTitle, 
          bX, bY, bT, orginX, orginY,
          recImage, iFid1x, iFid1y, iFid2x, iFid2y,
          gFidQty, gFid1x, gFid1y, gFid2x, gFid2y, gFid3x, gFid3y,
          oDataPlain
        },
  
        error : null
      })
    }else{
      sendUp({error : "Invalid"});
    }
  }catch(error) {
    sendUp({ error : error.message });
  }
}