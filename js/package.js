const loading = document.querySelector(".loading");
const cartContainer = document.querySelector(".carts");
const searchInput = document.getElementById("search");
const notText = document.getElementById("notText");

// document.body.innerHTML = "Avalaible Soon";

window.addEventListener("load", () => {
  loading.style.display = "none";
});

for (let i = 0; i <= 19; i++) {
  cartContainer.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="cart" id="${Math.floor(Math.random() * 0xffffff).toString(
          16
        )}">
        <div class="img"></div>
        <div class="text">
        <div class="name"></div>
        <div class="price"></div>
        <div class="icon" title="See Package">&blacktriangleright;</div>
        </div>
        </div>
        `
  );
}

const carts = document.querySelectorAll(".carts .cart");

// const aikArab = "100,000,000";

const packages = {
  0: {
    name: "world tour",
    price: "70,000,000",
    // price: "Not Avalaible",
  },
  1: {
    name: "mini world tour",
    price: "40,000,000",
    // price: "Not Avalaible",
  },
  2: {
    name: "dubai tour",
    price: "7,000,000",
  },
  3: {
    name: "dubai mini tour",
    price: "3,000,000",
  },
  4: {
    name: "turkey tour",
    price: "10,000,000",
  },
  5: {
    name: "turkey mini tour",
    price: "8,000,000",
  },
  6: {
    name: "paris tour",
    price: "8,000,000",
  },
  7: {
    name: "paris mini tour",
    price: "5,000,000",
  },
  8: {
    name: "korea tour",
    price: "6,000,000",
  },
  9: {
    name: "korea mini tour",
    price: "4,000,000",
  },
  10: {
    name: "india tour",
    price: "7,000,000",
  },
  11: {
    name: "india mini tour",
    price: "4,000,000",
  },
  12: {
    name: "china tour",
    price: "20,000,000",
  },
  13: {
    name: "china mini tour",
    price: "10,000,000",
  },
  14: {
    name: "africa tour",
    price: "9,000,000",
  },
  15: {
    name: "africa mini tour",
    price: "7,000,000",
  },
  16: {
    name: "pakistan tour",
    price: "8,000,000",
  },
  17: {
    name: "pakistan mini tour",
    price: "6,000,000",
  },
  18: {
    name: "saudi arab tour",
    price: "9,000,000",
  },
  19: {
    name: "saudi arab mini tour",
    price: "7,000,000",
  },
};

try {
  for (let i = 0; i <= carts.length; i++) {
    carts[i].querySelector(".text .name").innerHTML = packages[i].name;
    if (packages[i].price.includes("0")) {
      carts[i].querySelector(
        ".text .price"
      ).innerHTML = `$${packages[i].price}`;
    } else {
      carts[i].querySelector(".text .price").innerHTML = `${packages[i].price}`;
    }
  }
} catch (error) {
  console.log(error);
}

// console.log(Math.floor(Math.random() * 0xffffff).toString(16));

// Math.floor(Math.random() * 0xffffff).toString(16);

searchInput.addEventListener("input", () => {
  try {
    let filter = searchInput.value.toUpperCase().trim();

    let l = document.querySelectorAll(".name");

    for (var i = 0; i <= l.length; i++) {
      const a = carts[i].querySelectorAll(".name")[0];
      let value = a.innerHTML || a.innerText || a.textContent;

      if (value.toUpperCase().indexOf(filter) > -1) {
        carts[i].style.display = "flex";
      } else if ((carts[i].style.display = "none")) {
        notText.style.display = "block";
      } else {
        carts[i].style.display = "none";
      }
    }
  } catch (error) {
    console.log(error);
  }
});
