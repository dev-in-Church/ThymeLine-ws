import { toggleMenu, pageLoader } from "./app.js";
//import { qrSummary, qrToMemory } from "../data/qrSummary.js";
import { saveQR } from "./QRCodes/qrgen.js";

pageLoader();

saveQR();

//console.log(qrSummary);
