export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
