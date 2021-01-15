// import lodash from 'lodash';

export default function dataInputExtract (
  rawText,
  sendUpName, sendUpBoard, sendUpPlace, sendUpParts,
  sendUpError
) {
  try {
    if(rawText && typeof rawText.split(/\n/g)[2] == 'string') {
      const fileName = rawText.split(',', 1)?.[0];
      const coreCut = rawText.split(':CORE', 2)[1]?.split(':RECOG');
      const coreData = coreCut[0]?.trim()?.split(/\n/g);
      const topTitle = coreData[0]?.split(",")[0];
      const subTitle = coreData[0]?.split(",")[1];
      
      const gBadMark = coreData[2]?.split(",");
      const gBadX = Number(gBadMark[4]);
      const gBadY = Number(gBadMark[5]);

      const boardSize = coreData[1]?.split(",");
      const bX = Number(boardSize[0]);
      const bY = Number(boardSize[1]);
      const bT = Number(boardSize[2]);
      const orginX = Number(boardSize[3]);
      const orginY = Number(boardSize[4]);

      const recCut = coreCut[1]?.split(':MARK', 2);

      const globalFid = recCut[0]?.trim()?.split(/\n/g)[1]?.split(",");
      const useGlobal = Number(globalFid?.slice(0,1)) ? true : false;

      const markCut = recCut[1]?.split(':SETUP', 2);

      const fidMarks = markCut[0]?.trim();
      const fmarkArr = fidMarks?.split(/\n/g);

    // BarCodes :BC-COMMON -> :BC-MARK -> :NOZ-PLC

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
      const feederMap = feederArr?.map( (e)=>{
        return e.split(",");
      });

      const uCut1 = f5Cut[1]?.split(':P-DAT01', 2)[1];
      const oExist = uCut1?.includes(":O-DAT01");
      const uCut2 = oExist ? uCut1?.split(':O-DAT01', 2) : uCut1?.split(':PP1', 1);
      const uData = uCut2[0]?.replace(',',"").trim();
      const uArr = uData?.split(/\n/g);

      const imageFid = uArr[0]?.split(",");

      const iFid1x = useGlobal ? globalFid[1] : imageFid[7];
      const iFid1y = useGlobal ? globalFid[2] : imageFid[8];
      const iFid2x = useGlobal ? globalFid[4] : imageFid[9];
      const iFid2y = useGlobal ? globalFid[5] : imageFid[10];

      const findex1 = Number.parseInt( ( useGlobal ? globalFid[3] : imageFid[11] ), 10)-1; 
      const findex2 = Number.parseInt( ( useGlobal ? globalFid[6] : imageFid[12] ), 10)-1;
      const fMark1 = Number(fmarkArr[findex1]?.split(",")[1]);
      const fMark2 = Number(fmarkArr[findex2]?.split(",")[1]);

      const hasBad = uArr[1].split(",")[6] === "B";
      const localBad = hasBad ? uArr[1].split(",") : undefined;
      const lBadX = hasBad ? Number(localBad[0]) : undefined;
      const lBadY = hasBad ? Number(localBad[1]) : undefined;

      const pDataArray = hasBad ? uArr?.slice(2,-1) : uArr?.slice(1,-1);

      let pDataMap = pDataArray?.map( (pl)=> {
        const spL = pl.split(",");
        const pnMatch = feederMap.find( l => l[0] === spL[3] );
        const pn = pnMatch ? pnMatch[1] : undefined;
        return [ spL[13], Number(spL[0]), Number(spL[1]), Number(spL[2]), pn ];
      });
      pDataMap?.push(["fid1", Number(iFid1x), Number(iFid1y), 0, "FID"]);
      pDataMap?.push(["fid2", Number(iFid2x), Number(iFid2y), 0, "FID"]);

      const inUseParts = feederMap?.map( (e)=>{
        const plMatch = pDataMap.find( p => p[4] === e[1] );
        if(plMatch) {
          return e[1];
        }
      }).filter(f=>f).sort();

      const oData = oExist ? uCut2[1]?.split(':PP1', 1)[0]?.replace(',',"").trim() : undefined;
      const oDataArray = oData?.split(/\n/g)?.slice(1,-1);
      const oDataMap = oDataArray?.map( (ol)=> {
        const soL = ol.split(",");
        return [ Number(soL[0]), Number(soL[1]), Number(soL[2]) ];
      });

      sendUpName(fileName);

      sendUpBoard({ 
        topTitle, subTitle, 
        bX, bY, bT, orginX, orginY, 
        fMark1, fMark2, oDataMap,
        gBadX, gBadY, lBadX, lBadY
      });
      
      sendUpPlace(pDataMap);
      
      sendUpParts(inUseParts);
      
      sendUpError(null);
    }else{
      sendUpError("Invalid");
    }
  }catch(error) {
    sendUpError(error.message);
  }
}