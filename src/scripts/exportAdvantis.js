export function downAdvantis(filenameState, advBulkState) {
  const y = advBulkState;
  
  if(!y) { return null }
  /*
    topTitle, subTitle, 
    
    bX, bY, bT, orginX, orginY,
    
    recImage, iFid1x, iFid1y, iFid2x, iFid2y,
    gFidQty, gFid1x, gFid1y, gFid2x, gFid2y, gFid3x, gFid3y,
    
    oDataPlain // [0=x] [1=y] [2=theta] [3=control]
  */
  
  const pad = (val)=> {
    return Number.parseFloat(val).toFixed(4).toString();
  };
  const add = (a, b)=> (parseFloat(a) || 0) + (parseFloat(b) || 0);

  const date = new Date().toLocaleString('en-GB', { timeZone: 'America/Regina' }).split(", ")
  const dateArr = date[0].split("/");
  const dateTxt = `${dateArr[1]}/${dateArr[0]}/${dateArr[2]}`;
  
  const product_path = "C:" + "\\" + "UPS 6.02.00" + "\\" + "usos" + "\\" + "product" + "\\" + filenameState + ".upf";

  const board_path = "C:" + "\\" + "UPS 6.02.00" + "\\" + "USOS" + "\\" + "LIB" + "\\" + "BoardTemplate" + "\\" + filenameState + ".tpl";

  const component_path = "C:" + "\\" + "UPS 6.02.00" + "\\" + "USOS" + "\\" + "LIB" + "\\" + "DB" + "\\" + "Master.cdb";

  const config_path = "C:" + "\\" + "UPS 6.02.00" + "\\" + "USOS" + "\\" + "Config" + "\\" + "Machine.mcg";

  const feeder_path = "C:" + "\\" + "UPS 6.02.00" + "\\" + "USOS" + "\\" + "LIB" + "\\" + "DB" + "\\" + "Feeder.fdb";

  const header = `// Universal Instruments Comprehensive Import 2 File\n//\n// Product: ${product_path}\n//\n// Created by SM UPS+ Version 6.2.2.2\n// Created on ${dateTxt} at ${date[1]}\n//\n\n`;

  const product = `Product : "${filenameState}.upf"\n   "Board Name" : "${board_path}"\n   "Component Database Name" : "${component_path}"\n   "Configuration Name" : "${config_path}"\n   "Feeder Database Name" : "${feeder_path}"\n   "Feeder Template Name" : ""\n   "Name" : "${product_path}"\n\n`;

  const product_options = `ProductOptions : ""\n   "Description" : "${y.topTitle}, ${y.subTitle}, SMTx Conversion"\n   "Duplicate Feeders" : "0"\n   "Minimize Nozzle Changes" : ""\n   "Optimize Nozzle Changer" : "10"\n   "Reference X" : "${pad(y.orginX)}"\n   "Reference Y" : "${pad(y.orginY)}"\n   "Use Feeder Setup" : "11"\n   "Use Head Balancer" : "1"\n   "Use Nozzle Setup" : "11"\n   "Use Shuttle Feeder" : "00"\n   "Use Shuttle Nozzles" : "00"\n   "Use Spindles" : "000000000000000000000000000000011111100000000000000000000000"\n\n`;

  const command_default = `Command : ""\n   Save : "0"\n\n`;

  const format_default = `Format : ""\n   "Length Unit" : "Millimeters"\n   "Rotation Unit" : "Degrees"\n\n`;

  const hasOffsets = y.oDataPlain && y.oDataPlain.length > 0;
  let circX = '';
  for(let o of y.oDataPlain) {
    if(o[0] != 0) {
      circX = o[0];
      break;
    }
  }
  let circY = '';
  for(let o of y.oDataPlain) {
    if(o[1] != 0) {
      circY = o[1];
      break;
    }
  }

  const board_set = `BoardTemplate : "${board_path}" "Clearance" : "0.0000" "Color" : "" "Deformity" : "0.0000" "Thickness" : "0.0000"\n`; // ${pad(y.bT)}

  const circuit_board = `Circuit : "Board" "Name" : "Board" "Offset Of" : "Board" "X" : "0.0000" "Y" : "${pad(y.bY)}" "X" : "0.0000" "Y" : "0.0000" "X" : "${pad(y.bX)}" "Y" : "0.0000" "X" : "${pad(y.bX)}" "Y" : "${pad(y.bY)}"\n`;

  const circuit_one = !hasOffsets ? "" : `Circuit : "1" "Name" : "1" "Offset Of" : "1" "X" : "${pad(y.orginX)}" "Y" : "${pad(y.orginY)}" "X" : "${pad(y.orginX)}" "Y" : "${pad(add(y.orginY,circY))}" "X" : "${pad(add(y.orginX,circX))}" "Y" : "${pad(add(y.orginY,circY))}" "X" : "${pad(add(y.orginX,circX))}" "Y" : "${pad(y.orginY)}"\n`;

  const offsets = !hasOffsets ? "" : y.oDataPlain.map( (o, i)=> {
    if(i == 0) {
      return "";
    }else{
      return `Circuit : "${i+1}" "Name" : "${i+1}" "Offset Of" : "1" "X" : "${pad(o[0])}" "Y" : "${pad(o[1])}" "Theta" : "${pad(o[2])}"\n` 
    }
  }).join("");

  const board_template = `//*\n//* Board\n//*\n\n` + board_set + circuit_board + circuit_one + offsets + `\n`;

  const useFids = y.recImage ? [ [ y.iFid1x, y.iFid1y ], [ y.iFid2x, y.iFid2y ] ] :
                  y.gFidQty < 3 ? [ [ y.gFid1x, y.gFid1y ], [ y.gFid2x, y.gFid2y ] ] : 
                                  [ [ y.gFid1x, y.gFid1y ], [ y.gFid2x, y.gFid2y ], [ y.gFid3x, y.gFid3y ] ];

  const fiducial_set = `//*\n//* Fiducials\n//*\n\n${useFids.map( (f, i)=> `Fiducial : "FID${i+1}" "Circ" : "${hasOffsets ? '1' : 'Board'}" "Fiducial Type" : "Disc57_0" "Ref ID" : "FID${i+1}" "X" : "${pad(f[0])}" "Y" : "${pad(f[1])}"\n` ).join("")}\n`;

  const pad_default = `//*\n//* Pad Sites\n//*\n\n`;

  const placement_default = `//*\n//* Placements\n//*\n\n`;
// Placement : "U1" "Circ" : "1" "Component ID" : "80-RT-QFP" "Local" : "" "Process" : "Place" "Ref ID" : "U1" "Theta" : "180.000" "X" : "36.9010" "Y" : "20.5240" "ZZone" : "0" 

  const slot_default = `//*\n//* Slots\n//*\n\n`;
// Slot : "14" "Feeder" : "Track 4" "Component ID" : "8-SOIC" "Feeder Slot" : "14" "Track" : "1" "Rotation" : "270.000" 
// Slot : "32" "Feeder" : "Belt Reject" "Component ID" : "8-SOIC" "Feeder Slot" : "32" "Rotation" : "0.000" 

  const magazine_default = `//*\n//* Magazines\n//*\n\n`;

  const sq_start = `//*\n//* Sequences\n//*\n\nSequence : "Default"\n   Section : "Bad Sense" "Section Type" : "Bad Sense"\n`;

  const fid_steps = !hasOffsets ? `      Step : "1" "Step Type" : "Find" "Ref ID" : "FID1" "Circ" : "Board" "Bypass" : "0"\n      Step : "2" "Step Type" : "Find" "Ref ID" : "FID2" "Circ" : "Board" "Bypass" : "0"\n`
  : 
  y.oDataPlain.map( (o, i)=> {
    return `      Step : "${((i+1)*2)-1}" "Step Type" : "Find" "Ref ID" : "FID1" "Circ" : "${i+1}" "Bypass" : "0"\n      Step : "${(i+1)*2}" "Step Type" : "Find" "Ref ID" : "FID2" "Circ" : "${i+1}" "Bypass" : "0"\n`
  }).join("");

  const sq_fids = `   Section : "Fiducials" "Section Type" : "Fiducials"\n` + fid_steps;

  const sq_global = hasOffsets ? `   Section : "Global Corrections" "Section Type" : "Global Corrections"\n      Step : "1" "Step Type" : "Global Correct" "Circ" : "1" "Scope" : "Selected Circuit and all Offsets" "Ref ID" : "FID1" "Fid Circuit" : "1" "Ref ID" : "FID2" "Fid Circuit" : "1" "Bypass" : "0"\n`
  :
  `   Section : "Global Corrections" "Section Type" : "Global Corrections"\n      Step : "1" "Step Type" : "Global Correct" "Circ" : "Board" "Scope" : "Selected Circuit" "Ref ID" : "FID1" "Fid Circuit" : "Board" "Ref ID" : "FID2" "Fid Circuit" : "Board" "Bypass" : "0"\n`;

  const sq_end = `   Section : "Placements" "Section Type" : "Placements"\n   Section : "Post Processing" "Section Type" : "Generic"\n      Step : "1" "Step Type" : "Repair" "Bypass" : "0"\n\n`;

  const sequence_set = sq_start +  sq_fids + sq_global + sq_end;

  const fid_type_default = `//*\n//* Fiducial Types\n//*\n\n`;

  const local_default = `//*\n//* Local Corrections\n//*\n\nLocalCorrection : "Center" "Ref ID" : "[Center]" "Circ" : ""\nLocalCorrection : "Bottom Left/Top Right" "Ref ID" : "[Bottom Left]" "Circ" : "" "Ref ID" : "[Top Right]" "Circ" : ""\nLocalCorrection : "Bottom Right/Top Left" "Ref ID" : "[Bottom Right]" "Circ" : "" "Ref ID" : "[Top Left]" "Circ" : ""\n\n`;

  const component_default = `//*\n//* Components\n//*\n\n`;

  const feeder_default = `//*\n//* Feeders\n//*\n\n`;
// const feeder_default = `//*\n//* Feeders\n//*\n\nFeeder : "Belt Reject"\n   "Name" : "Belt Reject" "Category" : "Reject Belt" "Groups" : "" "Description" : "" "Action" : "Add" "Alias" : ""\n   "Number of Slots" : "3" "Reference Slot" : "1"\n   "Left Edge Distance" : "0.0000" "Front Edge Distance" : "0.0000" "Width" : "0.0000" "Depth" : "0.0000"\n   "Pickup X" : "1.2700" "Pickup Y" : "-72.7710" "Pickup Tolerance X" : "0.0000" "Pickup Tolerance Y" : "0.0000" "Theta Pick Tolerance" : "0.000" "Pick Attempts" : "0"\n   "Vibrate Delay (Reject)" : "2.000" "Powered" : "1" "Number of Tracks (Reject)" : "1" "Track Width (Reject)" : "50.8000"`;


  const fileConstruct = header + product + product_options + command_default + format_default + board_template + fiducial_set + pad_default + placement_default + slot_default + magazine_default + sequence_set + fid_type_default + local_default + component_default + feeder_default;


  if( typeof document !== 'undefined' ) {
    let link = document.createElement("a");
    link.setAttribute('download', `${filenameState}.ci2`);
    link.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(fileConstruct)}`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    // console.log(fileConstruct);

  }else{
    alert('document not found');
  }
}