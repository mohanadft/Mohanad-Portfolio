var menuBox = document.querySelector(".menu"),
  list = document.querySelector(".nav-list");

menuBox.onclick = function () {
  menuBox.classList.toggle("bx-x");
  list.classList.toggle("show");
  document.querySelector("body").classList.toggle("opacity");
};

document.querySelector(".home").onclick = function () {
  list.classList.remove("show");
  document.querySelector("body").classList.remove("opacity");
};

const links = document.querySelectorAll(".nav__link");

// remove navbar when click on links.
function linkAction() {
  links.forEach((element) => element.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.querySelector(".nav-list");
  navMenu.classList.remove("show");

  document.querySelector("body").classList.remove("opacity");
  menuBox.classList.toggle("bx-x");
}

links.forEach((element) => element.addEventListener("click", linkAction));

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// Home Section Animation
sr.reveal(".header_title", {});
sr.reveal(".image__header", { delay: 400 });
sr.reveal(".social ul li", { interval: 200 });

// About Section Animation

sr.reveal(".author_img", {});
sr.reveal(".subtitle", { delay: 200 });
sr.reveal(".about_text", { delay: 400 });
sr.reveal(".childhood_pictures img", { interval: 200 });

// Skills Section Animation

sr.reveal(".skills_text h1", {});
sr.reveal(".skills_text p", {});

sr.reveal(".skills_text", {
  origin: "left",
});

sr.reveal(".work_img", {
  origin: "top",
  delay: 300,
  interval: 600,
});

sr.reveal(".work .container div", { interval: 600 }); // projects

sr.reveal(".sub-projects .container div", { interval: 500 }); // sub-projects

sr.reveal("#social .social-icons li", { interval: 4 });
// Entrance

let loader = document.querySelector(".loading");

window.onload = function () {
  setInterval(() => {
    loader.classList.add("hide_loading");
  }, 3500);
  setInterval(() => {
    loader.style.display = "none";
  }, 4500);
};

// Type Writer

var h = loader.children[0];
var content = "Show. Don't Tell.";
var i = 0;
var typeWriter = setInterval(function () {
  h.textContent += content[i];
  i++;
  if (i > content.length - 1) clearInterval(typeWriter);
}, 200);

var typewrit = document.querySelector(".header_title span");
typewrit.textContent = "";
var content2 = "Frontend Developer.";
var j = 0;
var typeWriter2 = setInterval(function () {
  typewrit.textContent += content2[j];
  j++;
  if (j > content2.length) {
    typewrit.textContent = "";
    j = 0;
  }
}, 500);

// Dark Mode

let modeIcon = document.querySelector(".dark-mode"),
  header = document.querySelector("header"),
  sections = document.querySelectorAll("section"),
  anchors = document.querySelectorAll("a"),
  headerH1 = document.querySelector(".header_title"),
  parag = document.querySelectorAll("p"),
  subSpan = document.querySelectorAll(".skills_name"),
  percentages = document.querySelectorAll(".skills_percentage"),
  subTitles = document.querySelectorAll(".subtitle"),
  skills = document.querySelectorAll(".skills_data");

modeIcon.addEventListener("click", function () {
  modeIcon.classList.toggle("bxs-sun");
  // header
  header.classList.toggle("bg-dark");
  header.style.transition = "0.5s all ease-in-out";
  // sections
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.toggle("bg-dark");
    sections[i].style.transition = "0.5s all ease-in-out";
  }

  // Menu Icons

  menuBox.classList.toggle("white");
  // anchors
  for (let j = 0; j < anchors.length; j++) {
    anchors[j].classList.toggle("white");
  }

  // h1
  headerH1.classList.toggle("white");

  // Paragraphs

  for (let b = 0; b < parag.length; b++) {
    parag[b].classList.toggle("white");
  }

  // Spans
  for (let g = 0; g < subSpan.length; g++) {
    subSpan[g].classList.toggle("white");
  }

  // Percentages
  for (let h = 0; h < percentages.length; h++) {
    percentages[h].classList.toggle("white");
  }

  for (let f = 0; f < subTitles.length; f++) {
    subTitles[f].classList.toggle("blue");
  }
  for (let i = 0; i < skills.length; i++) {
    skills[i].classList.toggle("box-shadow_dark");
  }
});

// Scroll Top Section

let btn = document.querySelector(".up");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 0) {
    btn.classList.add("show-icon");
  } else btn.classList.remove("show-icon");

  btn.onclick = function () {
    document.documentElement.scrollTop = 0;
  };
  if (
    document.documentElement.scrollTop >=
    document.querySelector(".skills").offsetTop - 3
  ) {
    document.querySelector(".skills_html").classList.add("active");
    document.querySelector(".skills_css").classList.add("active");
    document.querySelector(".skills_js").classList.add("active");
    document.querySelector(".skills_boot").classList.add("active");
  }
};