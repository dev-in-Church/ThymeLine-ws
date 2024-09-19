export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "abggshhffd1-shhjjffffss-hhfhhgsffs27733",
    name: "Basketball",
    price: 1805,
    image: "img/products/basketball.png",
    count: 105,
  }, //0720862161 _ Samba
  {
    id: "gshshsjsj2-hhdhgdv49-dd",
    name: "Jordan nine",
    price: 1030,
    image: "img/products/j9.png",
    count: 1056,
  },
  {
    id: "shshgsgs3-sggsghja7278-ssggd",
    name: "Tecno camon 8",
    price: 4500,
    image: "img/products/phone 6.png",
    count: 147,
  },
  {
    id: "ssgsshhshs4-sgdgeke-eg27ssjd",
    name: "LENOVO Notebook",
    price: 9100,
    image: "img/products/laptop-img.png",
    count: 325,
  },
  {
    id: "eteteys5-shgfffhdhd27-gdgfdfdh22",
    name: "Mountain bike",
    price: 3310,
    image: "img/products/img-1.png",
    count: 8,
  },
  {
    id: "dgdgdhhdhgd6-dhdhgggd-rete5637",
    name: "6 * 6 Modern bed",
    price: 1100,
    image: "img/products/img-2.png",
    count: 111,
  },
  {
    id: "fdggddgdh7-cgcggcfcfxghx-hdgfsf77",
    name: "Round Sunglasses",
    price: 8045,
    image: "img/products/round-sunglasses-black.jpg",
    count: 1044,
  },
  {
    id: "dfdghdvffgc8-dfdfgdghdhhdg-sdttt6367",
    name: "Women Classic Dress",
    price: 5007,
    image: "img/products/women-clothes-img.png",
    count: 310,
  },
  {
    id: "dddfgdde9-ggcxfxffxfx-djhggfd635",
    name: "Plain Yellow Hood",
    price: 3200,
    image: "img/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    count: 746,
  },
  {
    id: "dggdfdfd10-dgffdffdffd-3hggd753",
    name: "Red High Heels",
    price: 2305,
    image: "img/products/women-shoes-img.jpg",
    count: 1261,
  },
  {
    id: "dgdfgdhhjd11-dfgdsjjsgdd-sfffsfgshh26773",
    name: "Women Bag",
    price: 2175,
    image: "img/products/women-bag-img.jpg",
    count: 862,
  },
  {
    id: "dggdghsjjjsff12-hdggffdghshd-35sgffss2",
    name: "Office Arm Chair",
    price: 8103,
    image: "img/products/product-9.jpg",
    count: 412,
  },
  {
    id: "dgfffsgggag13-gggxgxxfffxfxhjs1-hggdf55",
    name: "Backpack",
    price: 1803,
    image: "img/products/backpack.jpg",
    count: 1290,
  },
  {
    id: "cggcggggxgff14-sgffdhhhjdfre-hdgfdffs5338",
    name: "Canon Camera 3",
    price: 1032,
    image: "img/products/cat-2.jpg",
    count: 210,
  },
  {
    id: "dgfdffdtt15-ggffddsjjjs-sftwhbvxv",
    name: "Chocolate",
    price: 4501,
    image: "img/products/chocolate3.png",
    count: 3360,
  },
  {
    id: "sggggsgggsj16-sgggsggggs-dgrjhxvh6372",
    name: "Dress Shirt",
    price: 9102,
    image: "img/products/dress-shirt-img.png",
    count: 2603,
  },
  {
    id: "ssghsjja17-chhhxxjjjw-szgggya63788",
    name: "Fresh Grapes",
    price: 3310,
    image: "img/products/f1.png",
  },
  {
    id: "dgggajjj18-ahsgggggs-axgggxgsj273738",
    name: "Dress Pair",
    price: 1100,
    image: "img/products/img-8.png",
    count: 110,
  },
  {
    id: "xfxjjgeyyyh19-xznjjfjhghhg-fjjufuu737835",
    name: "All HandBag",
    price: 8034,
    image: "img/products/img-pro-03.jpg",
    count: 397,
  },
  {
    id: "dhfhhxxhfhjjjj20-fhhfjjsssur-fhhhfbajrjk3874",
    name: "Smartwatch",
    price: 5005,
    image: "img/products/img-pro-04.jpg",
    count: 1542,
  },
  {
    id: "dgreyywggaann21-sdhhfgkkbcbjcc-kkdhhgdg3667477",
    name: "Plain Red Hood",
    price: 3206,
    image: "img/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    count: 113,
  },
  {
    id: "fggfjjjjfjjfj22-ddgdgdgffdjd-hfjjkkd883665",
    name: "T-shirt Skyblue",
    price: 2307,
    image: "img/products/men-golf-polo-t-shirt-blue.jpg",
    count: 1613,
  },
  {
    id: "dhgggggdhjjjjjk23-jdjhhdgfffdmcgd-fgdfffffdbvh3",
    name: "Ocean Bike",
    price: 2178,
    image: "img/products/our-img-1.png",
    count: 45,
  },
  {
    id: "sfffhshhhshtfwnnh24-sdgdgddfsjjsks-sgdgghdy63773534",
    name: " DCC13-Drawn",
    price: 8109,
    image: "img/products/product-5.jpg",
    count: 422,
  },
];
