export let trolley = JSON.parse(localStorage.getItem("trolley"));

if (!trolley) {
  trolley = [
    //make trolley an empty array
    /*
    {
      productId: "abggshhffd1-shhjjffffss-hhfhhgsffs27733",
      quantity: 2,
    },
    {
      productId: "gshshsjsj2-hhdhgdv49-dd",
      quantity: 1,
    },*/
  ];
}

export function pushToMemory() {
  localStorage.setItem("trolley", JSON.stringify(trolley));
}

export function addToTrolley(productId) {
  let matchingItem;

  trolley.forEach((trolleyItem) => {
    if (productId === trolleyItem.productId) {
      matchingItem = trolleyItem;
    }
  });

  matchingItem
    ? matchingItem.quantity++
    : trolley.push({
        productId: productId,
        quantity: 1,
      });

  pushToMemory();
  updateTrolleyQuantity();
}

export function updateTrolleyQuantity() {
  let trolleyQuantity = 0;
  trolley.forEach((trolleyItem) => {
    trolleyQuantity += trolleyItem.quantity;
  });
  //console.log(trolleyQuantity);
  const count = document.querySelector(".js-count");
  trolleyQuantity > 99
    ? (count.innerHTML = "99+")
    : (count.innerHTML = trolleyQuantity);

  if (trolleyQuantity > 10) {
    count.style.borderRadius = "50px";
    count.style.padding = "1px 3px";
  }
}
//updateTrolleyQuantity();

export function removeFromTrolley(productId) {
  let newTrolley = [];

  trolley.forEach((trolleyItem) => {
    if (trolleyItem.productId !== productId) {
      newTrolley.push(trolleyItem);
    }
  });

  trolley = newTrolley;

  pushToMemory();
}
