import { writeFileSync,readFileSync } from "fs";
import { join } from "path";

const markdownExtension=/.md$/;

const [...inputFiles]=process.argv.slice(2);

inputFiles.forEach((inputFile)=>{
  const outputPath=join(inputFile.replace(markdownExtension,'.html'));
  const htmlOutput=readFileSync(inputFile,'utf-8')

  writeFileSync(outputPath,htmlOutput);
})
