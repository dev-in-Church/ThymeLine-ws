export let qrSummary = JSON.parse(localStorage.getItem("qrSumm"));
if (!qrSummary) {
  qrSummary = [];
}

export function qrToMemory() {
  localStorage.setItem("qrSumm", JSON.stringify(qrSummary));
}

qrToMemory();

//history html

export function renderHistoryHTML() {
  let historyHTML = "";

  qrSummary.forEach((item) => {
    // console.log(item.id);

    historyHTML += `
      <div class="code-container js-code-container-${item.id}">
        <div class="image">
          <a href="#"><i class="fa fa-qrcode"></i></a>
        </div>
        <div class="date">${new Date().toLocaleDateString()}</div>
        <div class="status">Active</div>
        <div class="rebuy">
          <a href="#"><i class="fa fa-recycle"></i>Rebuy</a>
        </div>
        <div class="options">
          <a href="#"><i class="fa fa-download"></i></a>
          <a href="#"><i class="fa fa-share"></i></a>
          <a href="#" class="js-remove-qr" data-item-id="${
            item.id
          }"><i class="fa fa-trash"></i></a>
        </div>
      </div>
    `;
    // console.log("hello");
  });

  // console.log("hello");

  if (qrSummary.length == 0) {
    document.querySelector(
      ".codes-grid"
    ).innerHTML = `<div class="empty-shoplist"><p>You currently have zero active shoplists:</p>
      <p>Shop &amp; pay for Goods now: <span><a href="shop.html">click Here</a></span></p>
    </div>`;
  } else {
    document.querySelector(".codes-grid").innerHTML = historyHTML;
  }

  document.querySelectorAll(".js-remove-qr").forEach((del) => {
    del.addEventListener("click", () => {
      // console.log("hello");

      const itemId = del.dataset.itemId;
      removeQrList(itemId);
      const container = document.querySelector(`.js-code-container-${itemId}`);
      container.remove();
      renderHistoryHTML();
    });
  });
}

//remove qr list
function removeQrList(itemId) {
  let newQRSummary = [];

  qrSummary.forEach((item) => {
    if (item.id !== itemId) {
      newQRSummary.push(item);
    }
  });

  qrSummary = newQRSummary;

  qrToMemory();
  console.log(qrSummary);
}
