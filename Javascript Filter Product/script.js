const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Smart",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Smart",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".categories");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (products) => {
  productsContainer.innerHTML = products.map(
    (product) =>
      `
    <div class="product">
        <img src=${product.img} alt=${product.id}>
        <span class="name">${product.name}</span>
        <span class="priceText">$${product.price}</span>
    </div>
    
    `
  ).join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const searchVal = e.target.value.toLowerCase();

  if (data) {
    // filters the item whose name matches the name we are searching and if it doesn't matches then just show no products on the screen
    const filterSearch = data.filter(
      (item) => item.name.toLowerCase().indexOf(searchVal) !== -1
    );
    displayProducts(filterSearch);
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  // filter all the categories that are repeated for the products and show the unique categories
  const filteredCats = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  // Showing the categories inside the category container
  categoriesContainer.innerHTML = filteredCats
    .map(
      (cat) =>
        `   
        <span class="category">${cat}</span>
    `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const SelectedCat = e.target.textContent;
    // Selecting the category and showing according to the category clicked
    if (SelectedCat === "All") {
      displayProducts(data);
    } else {
      const filterCat = data.filter((item) => item.cat === SelectedCat);
      displayProducts(filterCat);
      console.log(filterCat);
    }
  });
};

const setPrices = () => {
    const priceList = data.map(item => item.price)
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = `$${maxPrice}`;
    console.log(priceList);

    priceRange.addEventListener("input", (e) => {
        // Change the price range value on the screen
        priceValue.textContent = `$${e.target.value}`;
        // filter out the price while decreasing it and showing the products accordingly
        const filterPrice = data.filter(item => item.price<= e.target.value)
        displayProducts(filterPrice);
    })
}

setCategories();
setPrices();