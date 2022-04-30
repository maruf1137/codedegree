$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    750: {
      items: 2,
    },
  },
});

const bars = document.querySelector(".bars");
const sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", () => {
  console.log("sidebar");
  sidebar.classList.toggle("show-sidebar");
});
