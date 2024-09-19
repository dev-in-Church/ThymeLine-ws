export let qrSummary = JSON.parse(localStorage.getItem("qrSumm"));
if (!qrSummary) {
  qrSummary = [];
}

export function qrToMemory() {
  localStorage.setItem("qrSumm", JSON.stringify(qrSummary));
}

qrToMemory();

//remove qr list
function removeQrList() {
  let newQRSummary = [];
}
