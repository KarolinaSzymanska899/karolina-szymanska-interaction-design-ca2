const jackets = [
  {
    id: "0",
    name: "Wylie Snowboard Jacket",
    price: "112 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/E6145_01_7CmeNwj.avif",
  },
  {
    id: "1",
    name: "Wylie Snowboard Jacket",
    price: "125 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/E6208_01_88ZPuJr.avif",
  },
  {
    id: "2",
    name: "Annok Snowboard Jacket",
    price: "158 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/E8180_01_77cmCWY.avif",
  },
  {
    id: "3",
    name: "Blizzard Snowboard Jacket",
    price: "133 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/E8181_01_scZYFxX.avif",
  },

  {
    id: "4",
    name: "Annok Snowboard Jacket",
    price: "158 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/E8392_01_dSRMGR5.avif",
  },
  {
    id: "5",
    name: "Adept Snowboard Jacket",
    price: "160 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/E8424_200.avif",
  },
  {
    id: "6",
    name: "Legacy Snowboard Jacket",
    price: "135 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/F0450_01_k5LI2j9.avif",
  },
  {
    id: "7",
    name: "Cyclone Snowboard Jacket",
    price: "140 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/F0618_01_l1FWanm.avif",
  },

  {
    id: "8",
    name: "Akin Snowboard Jacket",
    price: "200 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/F0645_01_TpgLizB.avif",
  },
  {
    id: "9",
    name: "Yeti Snowboard Jacket",
    price: "117 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/F0648_01_rW6emoF.avif",
  },
  {
    id: "10",
    name: "Insulated Midlayer Jacket",
    price: "92 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/F0657_01_KqfF2Dt.avif",
  },
  {
    id: "11",
    name: "Blizzard Snowboard Jacket",
    price: "158 €",
    description:
      "Dope's very own signature style which stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes it one serious street-style inspired anorak that’s ready to slash everything from the park to the pow, and look awesome doing it.",
    image: "../images/products/H0223_01_KtNwDH0.avif",
  },
];

const containerDetails = document.querySelector(".container-details");

console.log(containerDetails);

let html = "";

for (let i = 0; i < jackets.length; i++) {
  html += `<img class="image-jacket" src="${jackets[i].image}" alt="${jackets[i].name}">

          <div class="container-text">
            <div class="container-text-small">
              <h1 class="name">${jackets[i].name}</h1>
              <h2 class="price">${jackets[i].price}</h2>
            </div>
            <div class="container-text-small-2">
              <p><i class="fa-solid fa-circle-check"></i> Delivery time 3-4 business days</p>
              <p><i class="fa-solid fa-circle-check"></i> Free shipping and free returns</p>
              <p><i class="fa-solid fa-circle-check"></i> 30 days right of return</p>
            </div>
            <div class="container-buttons">
              <div class="btn shadow">Cart()</div>
              <div class="btn shadow secondary">Clear Cart</div>
            </div>
          </div>`;

  console.log(html);
}

containerDetails.innerHTML = html;
