# urchin

SMT Extractor (formerly PGA to CSV Converter)

A utility to handle Hitachi GXH Series and Yamaha G5II machine program files.

Inputs file with a `.pga` or `.psa` extension. Outputs a formatted pick and place CSV file and overall board information and parts list as plain text files. 
Sigma conversion is saved as a `.psa` file that is formated for NT-100 or a Yamaha Sigma machine. Advantis conversion is saved as a `.ci2` file that is formated for a UIC Advantis and other modern Universal Instruments machines with "Comprehensive Import" (not running OS/2.)
              
All files are processed locally. No file content or metadata is transported to any server, cloud or 3rd party service.

Downloaded output files are formatted as UTF-8 text files with a `.csv`, `.txt`, `psa` or `ci2` extension. Printed output is generated as html for the browser's print utility.

Built with React-Static.
