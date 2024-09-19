function Trolley(localStorageKey) {
  const trolley = {
    trolleyItems: undefined,

    loadFromMemory() {
      this.trolleyItems = JSON.parse(localStorage.getItem(localStorageKey));
      if (!this.trolleyItems) {
        this.trolleyItems = [
          {
            productId: "abggshhffd1-shhjjffffss-hhfhhgsffs27733",
            quantity: 2,
          },
          {
            productId: "gshshsjsj2-hhdhgdv49-dd",
            quantity: 1,
          },
        ];
      }
    },

    pushToMemory() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.trolleyItems));
    },

    addToTrolley(productId) {
      let matchingItem;

      this.trolleyItems.forEach((trolleyItem) => {
        if (productId === trolleyItem.productId) {
          matchingItem = trolleyItem;
        }
      });

      if (matchingItem) {
        matchingItem.quantity++;
      } else {
        this.trolleyItems.push({
          productId: productId,
          quantity: 1,
        });
      }

      this.pushToMemory();
    },

    removeFromTrolley(productId) {
      let newTrolley = [];

      this.trolleyItems.forEach((trolleyItem) => {
        if (trolleyItem.productId !== productId) {
          newTrolley.push(trolleyItem);
        }
      });

      this.trolleyItems = newTrolley;

      this.pushToMemory();
    },
  };

  return trolley;
}

const trolley = Trolley("trolley-oop");
//const businessTrolley = Trolley("trolley-business");

trolley.loadFromMemory();

//businessTrolley.loadFromMemory();

console.log(trolley);
//console.log(businessTrolley);
