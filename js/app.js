const header = document.querySelector(".header");
const home = document.getElementById("home");
const body = document.querySelector("body");
const icons = document.querySelector(".icons");
const navbar = document.querySelector("header nav");
const navLinks = document.querySelectorAll("header nav a");
const logo = document.querySelector("header .logo a");
const ScrollPlane = document.querySelector(".plane div");
const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  loading.style.display = "none";
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 609) {
    header.style.backgroundColor = "var(--main-color)";
  } else {
    header.style.backgroundColor = "transparent";
  }

  if (scroll_position > 80) {
    ScrollPlane.style.color = "var(--main-color)";
    // ScrollPlane.style.color = "#000";
  } else {
    ScrollPlane.style.color = "#fff";
  }
});

setInterval(() => {
  if (window.innerWidth > 560) {
    navbar.classList.remove("active");
  }
}, 1000);

icons.addEventListener("click", () => {
  icons.classList.toggle("close");
  navbar.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      icons.classList.remove("close");
      navbar.classList.remove("active");
    }
  });
});

//?  FOR CONTACT

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br /> Email: ${email.value}<br />
  Phone Number: ${phone.value}<br /> Message: ${mess.value}`;

  Email.send({
    SecureToken: "65f8fc6d-90ea-4c86-be62-b1718af05792",
    To: "shamoilkhan210@gmail.com",
    From: "shamoilkhan210@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !mess.classList.contains("error")
  ) {
    try {
      sendEmail();
    } catch (error) {
      console.error(error);
    }

    form.reset();
    return false;
  }
});

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".home");
const numberOfSlides = slides.length;
let slideNumber = 0;

//slider next button

function next() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  next();
});

//slider prev button

function prev() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  prev();
});

const packageLink = document.getElementById("packageLink");
const packages_btn = document.querySelector(".packages-btn");

function goToPackages() {
  const prevUrl = window.location.href;
  if (prevUrl.includes("index.html")) {
    window
      .open(
        prevUrl
          .replace("#", "")
          .replace("home", "")
          .replace("about", "")
          .replace("contact", "")
          .replace("index", "package")
      )
      .focus();
  } else {
    window
      .open(
        `${prevUrl
          .replace("#", "")
          .replace("home", "")
          .replace("about", "")
          .replace("contact", "")}package.html`
      )
      .focus();
  }
  // window.location.href = prevUrl.replace("#", "");
}

packageLink.addEventListener("click", goToPackages);
packages_btn.addEventListener("click", goToPackages);

const errPage = document.getElementById("errPage");

const checkUrl = (defaultUrl) => {
  const a = "https://shamoil-khan.github.io/Tours-Website/";
  const a1 = "https://shamoil-khan.github.io/Tours-Website";
  const b = `${a2}#home`;
  const c = `${a2}#about`;
  const d = `${a2}#contact`;
  const e = `${a2}#`;

  if (
    defaultUrl === a ||
    defaultUrl === a1 ||
    defaultUrl === b ||
    defaultUrl === c ||
    defaultUrl === d ||
    defaultUrl === e
  ) {
    errPage.classList.remove("active");
    console.log("page founded");
  } else {
    errPage.classList.add("active");
  }
};


    // errPage.classList.remove("active");

setInterval(() => {
  checkUrl(window.location.href);
}, 1);
