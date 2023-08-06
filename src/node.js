// Mobile Menu

// const menuButton = document.querySelector("#menu_btn");
// const closeButton = document.querySelector("#close_btn");
// const mobileMenu = document.getElementById('mobileMenu');

// menuButton.addEventListener("click", () => {
//     mobileMenu.classList.add('sm:block');
// })

// Everything Section

const card_item = [...document.querySelectorAll("#card_item")];
const image_src = [
  "../assests/payroll.png",
  "../assests/expenses.png",
  "../assests/vat-returns.png",
  "../assests/reporting.png",
];
const imageContainer = document.getElementById("imgContainer");
const image = document.getElementById("image");
image.src = image_src[0];

card_item.forEach((item, index) => {
  card_item[0].classList.add("bg-white/10");
  item.addEventListener("click", () => {
    image.src = image_src[index];
    card_item[index].classList.add("bg-white/10");
    const delBg = card_item.filter(
      (_, idx) => card_item[idx] != card_item[index]
    );
    delBg.forEach((item) => item.classList.remove("bg-white/10"));
  });
});

// Pricing Section

const priceCard = [...document.querySelectorAll("#priceCard")];
// const priceImage = [...document.querySelectorAll("#priceCardImg")];

const priceCardContainer = document.getElementById("priceCardContainer");

priceCard[0].addEventListener("click", () => {
  priceCardContainer.classList.replace("translate-x-[0%]", "translate-x-[95%]");
  priceCardContainer.classList.replace(
    "-translate-x-[95%]",
    "translate-x-[95%]"
  );
});

priceCard[1].addEventListener("click", () => {
  priceCardContainer.classList.replace("translate-x-[95%]", "translate-x-[0%]");
  priceCardContainer.classList.replace(
    "-translate-x-[95%]",
    "translate-x-[0%]"
  );
});

priceCard[2].addEventListener("click", () => {
  priceCardContainer.classList.replace(
    "translate-x-[95%]",
    "-translate-x-[95%]"
  );
  priceCardContainer.classList.replace(
    "translate-x-[0%]",
    "-translate-x-[95%]"
  );
  console.log(priceCardContainer.classList);
});

const active = (index) => {
  priceCard[index].children[0].children[0].classList.replace(
    "bg-slate-500",
    "bg-blue-600"
  );
  priceCard[index].children[1].classList.add("text-blue-600");
  priceCard[index].children[2].classList.remove("text-slate-700");
  priceCard[index].children[3].classList.replace(
    "text-slate-600",
    "text-slate-900"
  );
};

const removeActive = (index) => {
  priceCard[index].children[0].children[0].classList.replace(
    "bg-blue-600",
    "bg-slate-500"
  );
  priceCard[index].children[1].classList.remove("text-blue-600");
  priceCard[index].children[2].classList.add("text-slate-700");
  priceCard[index].children[3].classList.replace(
    "text-slate-900",
    "text-slate-600"
  );
};

priceCard.map((item, index) => {
  item.addEventListener("click", () => {
    // priceCardImage.src = priceImage[index];
    active(index);
    priceCard.filter((_, idx) => {
      if (idx != index) {
        removeActive(idx);
      }
    });
  });
});
