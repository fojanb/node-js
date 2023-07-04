const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
const useData = (products) => {
  products.map((product) => {
    let prod = document.createElement("div");
    prod.innerHTML = `<a href="/api/products/${product.id}">${product.name}</a>`;
    document.body.append(prod);
  });
};
const fetchData = async () => {
  const res = await fetch("/api/products");
  const data = await res.json();
  useData(data);
};

window.addEventListener("load", () => {
  fetchData();
});
