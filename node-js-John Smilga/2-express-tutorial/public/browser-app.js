const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
const renderProducts = (products) => {
  products.map((product) => {
    let prod = document.createElement("div");
    prod.innerHTML = `<a href="/api/products/${product.id}">${product.name}</a>`;
    document.body.append(prod);
  });
};
const getProducts = async () => {
  const res = await fetch("/api/products");
  const products = await res.json();
  renderProducts(products);
};
const getProduct = async () => {


}

window.addEventListener("load", () => {
  getProducts();
});
