$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  },
});

const bars = document.querySelector(".bars");
const closeSidebar = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", () => {
  console.log("sidebar");
  sidebar.classList.toggle("show-sidebar");
});
closeSidebar.addEventListener("click", () => {
  console.log("sidebar");
  sidebar.classList.remove("show-sidebar");
});

// custom cursor

const cursor = document.querySelector(".cursor");

gsap.to(cursor, { xPercent: -50, yPercent: -50 });

window.addEventListener("mousemove", (e) => {
  console.log(e.x);
  gsap.to(cursor, { x: e.x, y: e.y });
});

const cursorShow = () => {
  cursor.style.display = "flex";
};

const cursorHide = () => {
  cursor.style.display = "none";
};

const project = document.querySelector(".project");
project.addEventListener("mouseover", cursorShow);
project.addEventListener("mouseout", cursorHide);
