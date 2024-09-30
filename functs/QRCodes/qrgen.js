import { trolley } from "../../data/trolley.js";
import { qrSummary, qrToMemory } from "../../data/qrSummary.js";

export function generateQR() {
  //const gen = document.getElementById("gen-btn");
  //const clientName = document.getElementById("nameC");
  /* 
  let clientNamevalue = JSON.parse(localStorage.getItem("name"));
  if (!clientNamevalue) {
    clientNamevalue = [];
  }
    */

  //clientNamevalue = clientName.value.length;
  //console.log(clientNamevalue);

  //localStorage.setItem("name", JSON.stringify(clientNamevalue));
  /*
  if (clientName.value.length == 0) {
    console.log(15);
  } else {
    console.log(30);
  }
    */

  document.getElementById("gen-btn").addEventListener("click", () => {
    const payBtn = document.getElementById("pay");

    //clientName.value += "30, 50";
    document.getElementById("qrcode").innerHTML = "";
    let qrcodeCode = `${clientName.value.toUpperCase()}${codeContents.name}\n${
      codeContents.code
    }:${trolley.length + "0"}`;

    // saveQR(qrcodeCode);

    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: qrcodeCode,
      width: "200",
      height: "200",
    });

    console.log(qrcodeCode);
    // return qrcodeCode;

    payBtn.style.display = "block";
    //document.createElement("button");
  });

  const codeContents = {
    name: "",
    code: `#${new Date().getMilliseconds()}:${new Date().getDay()}:${new Date().getSeconds()}:${new Date().getHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCMonth()}:${
      new Date().getFullYear() - 2000 + trolley.length
    }`,
  };
  // return codeContents;
  //console.log(codeContents.code);
  //console.log(typeof new Date().getFullYear());

  document.getElementById("pay").addEventListener("click", () => {
    //qrSummary.push({
    //image: document.getElementById("qrcode").innerHTML,
    // date: "date",
    // });
    // qrToMemory();
    window.open("payments.html", "_self");
    //console.log(qrSummary);
    //window.open("payments.html", "_self");
  });

  const clientName = document.getElementById("nameC");
  const genBtn = document.getElementById("gen-btn");

  clientName.addEventListener("input", checkInput, () => {
    genBtn.style.display = "inline-block";
  });

  function checkInput() {
    if (clientName.value === "") {
      genBtn.style.display = "none";
    } else {
      genBtn.style.display = "inline-block";
    }
  }

  //

  //rejection here***===*** &nmp; all the vents innit\\\
  //clientName.addEventListener("input", checkInput);

  checkInput();

  ///check qrSmm contents
  // return codeContents;
}

////save qr after payments
export function saveQR(newId) {
  document.getElementById("submit").addEventListener("click", (event) => {
    const now = `${new Date().getFullYear()}-xxr-${qrSummary.length}`;
    event.preventDefault();
    qrSummary.push({
      id: `${now}`,
      image: "image here",
      date: now,
    });
    alert("confirm payments");
    qrToMemory();
    //window.open("payments.html", "_self");
    console.log(qrSummary);
    console.log(now);

    //window.open("payments.html", "_self"); //prevent from being submitted
    //run func

    //open an HTML page
    //window.open("https://www.youtube.com/", "_blank");
  });

  console.log(qrSummary.id);
  console.log("hello");
  // console.log(codeContents);
}

/*
setTimeout(() => {
  console.log("waited 10 seconds");
}, 10000);
*/
